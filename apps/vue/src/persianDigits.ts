const latinDigits = /[0-9]/g
const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
const technicalContent = 'pre, code, kbd, samp, script, style, [data-ascii-digits], [contenteditable]:not([contenteditable="false"])'
const visibleAttributes = ['aria-label', 'title', 'placeholder'] as const

function localize(value: string) {
  return value.replace(latinDigits, digit => persianDigits[Number(digit)]!)
}

function isTechnical(element: Element | null) {
  return Boolean(element?.closest(technicalContent))
}

function localizeText(node: Text) {
  if (!node.nodeValue || isTechnical(node.parentElement)) return
  const localized = localize(node.nodeValue)
  if (localized !== node.nodeValue) node.nodeValue = localized
}

function localizeElement(element: Element) {
  if (isTechnical(element)) return
  for (const attribute of visibleAttributes) {
    const value = element.getAttribute(attribute)
    if (!value) continue
    const localized = localize(value)
    if (localized !== value) element.setAttribute(attribute, localized)
  }
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
  for (let node = walker.nextNode(); node; node = walker.nextNode()) localizeText(node as Text)
}

export function enablePersianUiDigits(root: Element) {
  localizeElement(root)
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') localizeText(record.target as Text)
      if (record.type === 'attributes') localizeElement(record.target as Element)
      for (const node of record.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) localizeText(node as Text)
        else if (node.nodeType === Node.ELEMENT_NODE) localizeElement(node as Element)
      }
    }
  })
  observer.observe(root, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...visibleAttributes] })
  return () => observer.disconnect()
}
