// Usage: node tools/browser-check.cjs <playwright-module-path> <chrome-exe> <project-url>
// The server must expose the project directory containing site/ and design-system/.
const {chromium} = require(process.argv[2] || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const base = (process.argv[4] || 'http://127.0.0.1:8791').replace(/\/$/, '');
const results = {version:'0.1.0', scope:'Reference browser behavior and rendering; no screen-reader or complete WCAG audit',checks:[], errors:[]};
function pass(name, detail) { results.checks.push({name, passed:true, detail}); }
(async () => {
  const browser = await chromium.launch({headless:true, ...(process.argv[3] ? {executablePath:process.argv[3]} : {})});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1050},deviceScaleFactor:1});
    page.on('pageerror', error => results.errors.push(error.message));
    page.on('response', response => { if(response.status() >= 400) results.errors.push(`${response.status()} ${response.url()}`); });
    // Capture the ACTUAL edited baseline, not any source archive or historical preview.
    await page.goto(`${base}/site/index.html`, {waitUntil:'networkidle'});
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({path:path.join(root,'evidence/edited-landing-desktop.png'),fullPage:false});
    results.baselineStyles = await page.evaluate(() => {
      const pick = selector => {
        const element = document.querySelector(selector);
        const s = getComputedStyle(element);
        return {fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,color:s.color,backgroundColor:s.backgroundColor,borderRadius:s.borderRadius};
      };
      return {h1:pick('h1'),body:pick('body'),cta:pick('.nav-cta'),card:pick('.path-card'),fontsLoaded:document.fonts.check('800 32px Estedad') && document.fonts.check('400 16px Vazirmatn')};
    });
    assert.match(results.baselineStyles.h1.fontFamily,/Estedad/);
    assert.match(results.baselineStyles.body.fontFamily,/Vazirmatn/);
    assert.equal(results.baselineStyles.fontsLoaded,true);
    pass('Edited landing fonts verified in browser',results.baselineStyles);
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:path.join(root,'evidence/edited-landing-mobile.png'),fullPage:false});
    await page.setViewportSize({width:1440,height:1050});
    await page.goto(`${base}/site/contact.html`, {waitUntil:'networkidle'});
    await page.evaluate(() => document.fonts.ready);
    results.baselineContactStyles = await page.evaluate(() => {
      const styles = selector => { const s = getComputedStyle(document.querySelector(selector)); return {height:s.height,backgroundColor:s.backgroundColor,borderRadius:s.borderRadius}; };
      return {input:styles('.field input'),submit:styles('.submit'),panel:styles('.panel')};
    });
    assert.equal(results.baselineContactStyles.input.height,'54px');
    assert.equal(results.baselineContactStyles.input.borderRadius,'13px');
    assert.equal(results.baselineContactStyles.submit.backgroundColor,'rgb(253, 193, 1)');
    pass('Edited contact final CSS overrides verified',results.baselineContactStyles);
    await page.goto(`${base}/design-system/reference/index.html`,{waitUntil:'networkidle'});
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.evaluate(() => document.fonts.check('800 32px Estedad') && document.fonts.check('400 16px Vazirmatn')),true);
    pass('Reference fonts load from local package');
    await page.screenshot({path:path.join(root,'evidence/reference-desktop.png'),fullPage:true});
    for (const width of [320,390,768,1024,1440]) {
      await page.setViewportSize({width,height:1000});
      const measure = await page.evaluate(() => ({viewport:innerWidth,body:document.body.scrollWidth,document:document.documentElement.scrollWidth}));
      assert.ok(measure.document <= width + 1 && measure.body <= width + 1,JSON.stringify(measure));
      pass(`No page-level horizontal overflow at ${width}px`,measure);
      if(width === 390) await page.screenshot({path:path.join(root,'evidence/reference-mobile.png'),fullPage:true});
    }
    await page.setViewportSize({width:1280,height:900});
    await page.getByRole('button',{name:'بررسی نمونهٔ فرم',exact:true}).click();
    await assert.equal(await page.locator('#demo-name').getAttribute('aria-invalid'),'true');
    assert.equal(await page.locator('#demo-name').evaluate(el => el === document.activeElement),true);
    assert.equal(await page.locator('#name-error').isVisible(),true);
    pass('Invalid form associates error and focuses invalid field');
    await page.locator('#demo-name').fill('سارا احمدی');
    await page.locator('#demo-submit').click();
    assert.equal(await page.locator('#demo-submit').isDisabled(),true);
    assert.equal(await page.locator('#demo-form').getAttribute('aria-busy'),'true');
    await page.locator('#form-result').filter({hasText:'داده‌ای ذخیره یا ارسال نشد'}).waitFor();
    assert.equal(await page.locator('#demo-submit').isEnabled(),true);
    pass('Form loading prevents duplicate submit and clearly reports simulation');
    await page.locator('#sample-search').fill('شیراز');
    assert.equal(await page.locator('#sample-rows tr:visible').count(),1);
    await page.locator('#sample-search').fill('فاقدنتیجه');
    assert.equal(await page.locator('#sample-empty').isVisible(),true);
    assert.equal(await page.locator('#sample-results').isVisible(),false);
    await page.getByRole('button',{name:'پاک‌کردن جست‌وجو',exact:true}).click();
    assert.equal(await page.locator('#sample-rows tr:visible').count(),3);
    assert.equal(await page.locator('#sample-search').evaluate(el => el === document.activeElement),true);
    pass('Search filters results, exposes distinct empty state and restores focus');
    const radio = page.locator('input[value="compare"]');
    await radio.check();
    assert.equal(await radio.isChecked(),true);
    await page.locator('input[value="discover"]').focus();
    await page.keyboard.press('ArrowLeft');
    assert.equal(await radio.isChecked(),true);
    pass('Native radio group supports keyboard selection');
    await page.goto(`${base}/design-system/reference/index.html`,{waitUntil:'networkidle'});
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.skip').evaluate(el => el === document.activeElement),true);
    const focus = await page.locator('.skip').evaluate(el => ({outline:getComputedStyle(el).outlineStyle,shadow:getComputedStyle(el).boxShadow}));
    assert.equal(focus.outline,'solid');
    assert.notEqual(focus.shadow,'none');
    await page.keyboard.press('Enter');
    pass('Keyboard skip link and visible two-layer focus work',focus);
    await page.emulateMedia({reducedMotion:'reduce'});
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),'auto');
    pass('Reduced motion disables smooth scrolling');
    await page.locator('#demo-name').fill('نام و نام خانوادگی بسیار طولانی برای بررسی خوانایی و نمایش فرم');
    await page.setViewportSize({width:320,height:900});
    assert.equal(await page.locator('#demo-name').isVisible(),true);
    pass('Long Persian input remains editable at narrow viewport');
    // 200% text enlargement proxy; actual browser zoom/screen reader remain manual follow-up.
    await page.setViewportSize({width:768,height:900});
    await page.addStyleTag({content:'p,label,input,select,button,a,small,td,th{font-size:200%!important}'});
    const enlargement = await page.evaluate(() => ({width:innerWidth,actual:document.documentElement.scrollWidth}));
    assert.ok(enlargement.actual <= enlargement.width + 1,JSON.stringify(enlargement));
    pass('200% text enlargement proxy has no page overflow',enlargement);
    assert.equal(results.errors.length,0,JSON.stringify(results.errors));
    pass('No JavaScript exceptions or failed resource responses');
    results.passed = true;
  } catch(error) {
    results.passed = false;
    results.failure = String(error.stack || error);
    process.exitCode = 1;
  } finally {
    fs.writeFileSync(path.join(root,'evidence/browser-verification.json'),JSON.stringify(results,null,2)+'\n');
    await browser.close();
    console.log(JSON.stringify({passed:results.passed,checks:results.checks.length,errors:results.errors,failure:results.failure},null,2));
  }
})().catch(error => { console.error(error); process.exitCode=1; });
