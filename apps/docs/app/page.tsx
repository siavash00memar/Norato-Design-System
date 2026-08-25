"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldExample } from "@/components/field-example"
import { Tag } from "@/components/ui/tag"
import { FieldGroup } from "@/components/field-group"
import { TreeView } from "@/components/tree-view"

const nav = [{ id: "home", title: "خانه" }, { id: "components", title: "کامپوننت‌ها" }, { id: "patterns", title: "الگوهای کاربری" }, { id: "structures", title: "ساختارها" }, { id: "agents", title: "استفاده در Agentها" }, { id: "about", title: "درباره نوراتو" }]

export default function Page() {
  const [active, setActive] = useState("home")
  const [submitted, setSubmitted] = useState(false)
  return <div className="docs-shell" dir="rtl">
    <aside className="docs-sidebar"><div className="brand"><span className="brand-mark">ن</span><div><strong>نوراتو</strong><small>Design System</small></div></div><nav>{nav.map(item => <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>{item.title}</button>)}</nav><div className="sidebar-note">سیستم طراحی RTL برای تجربه‌های فارسی</div></aside>
    <main className="docs-main"><header><span className="eyebrow">NORATO DESIGN SYSTEM</span><span className="version">نسخه ۰.۲</span></header>
      {active === "home" && <section className="hero"><div className="hero-copy"><span className="eyebrow">طراحی‌شده برای ساخت بهتر</span><h1>زبان مشترک<br /><em>برای محصولات نوراتو</em></h1><p>نوراتو یک سیستم طراحی فارسی و RTL-first است که اصول تجربه کاربری متریال دیزاین را با زبان بصری فیگمای نوراتو ترکیب می‌کند.</p><Button onClick={() => setActive("components")}>مشاهده کامپوننت‌ها</Button></div><Card className="hero-card"><CardHeader><CardTitle>در یک نگاه</CardTitle></CardHeader><CardContent><Progress value={72} /><div className="metric"><strong>۳۶۰px</strong><span>فریم مرجع موبایل</span></div><div className="metric"><strong>۲۴px</strong><span>گاتر محتوای اصلی</span></div></CardContent></Card></section>}
      {active === "components" && <section><SectionTitle title="کامپوننت‌ها" text="اجزای واقعی و تعاملی نوراتو، آماده برای استفاده در پروژه‌های وب." /><div className="component-grid"><Card><CardHeader><CardTitle>دکمه‌ها</CardTitle></CardHeader><CardContent className="demo-row"><Button>تأیید و ادامه</Button><Button variant="outline">انصراف</Button><Button variant="ghost">عملیات دیگر</Button><Button variant="third">متن</Button></CardContent></Card><Card><CardHeader><CardTitle>فیلد متنی</CardTitle></CardHeader><CardContent className="form-demo figma-field-demo"><div><Input id="name" placeholder="نام خود را بنویسید" /></div><Label htmlFor="name">نام و نام خانوادگی</Label></CardContent></Card><Card><CardHeader><CardTitle>متن چندخطی</CardTitle></CardHeader><CardContent className="form-demo"><Textarea placeholder="توضیحات خود را بنویسید" /></CardContent></Card><Card><CardHeader><CardTitle>انتخاب و گزینه‌ها</CardTitle></CardHeader><CardContent className="form-demo"><Select><SelectTrigger aria-label="یک گزینه انتخاب کنید"><SelectValue placeholder="یک گزینه انتخاب کنید" /></SelectTrigger><SelectContent><SelectItem value="first">گزینه اول</SelectItem><SelectItem value="second">گزینه دوم</SelectItem></SelectContent></Select><RadioGroup><label><RadioGroupItem name="type" defaultChecked /> گزینه اول</label><label><RadioGroupItem name="type" /> گزینه دوم</label></RadioGroup><label><Checkbox /> قوانین را می‌پذیرم</label></CardContent></Card><Card><CardHeader><CardTitle>تاریخ‌نگار</CardTitle></CardHeader><CardContent className="form-demo figma-field-demo"><div className="figma-date-control"><button type="button" aria-label="باز کردن تقویم" className="figma-date-icon"><img src="https://www.figma.com/api/mcp/asset/8e75d6c0-03bc-44d2-be89-17a6731e0482.svg" alt="" /></button><Input aria-label="تاریخ" type="text" placeholder="تاریخ" /></div><Label>تاریخ تولد</Label></CardContent></Card><Card><CardHeader><CardTitle>گروه فیلد فیگما</CardTitle></CardHeader><CardContent className="figma-field-group"><h4>اطلاعات تماس</h4><div><Input placeholder="نام خود را بنویسید" /><Label>نام</Label></div><div><Input placeholder="شماره تماس را بنویسید" /><Label>شماره تماس</Label></div></CardContent></Card><Card><CardHeader><CardTitle>فرم واقعی نوراتو</CardTitle></CardHeader><CardContent className="form-demo"><Label htmlFor="email">ایمیل</Label><Input id="email" type="email" placeholder="ایمیل خود را بنویسید" /><Button onClick={() => setSubmitted(true)}>{submitted ? "ثبت شد" : "ثبت اطلاعات"}</Button></CardContent></Card></div></section>}
      {active !== "home" && active !== "components" && <section><SectionTitle title={nav.find(x => x.id === active)?.title || "نوراتو"} text="این بخش در نسخه‌ی بعدی با مستندات کامل، مثال و قراردادهای قابل استفاده تکمیل می‌شود." /><Card><CardContent><p>ساختار این صفحه بر اساس معماری مستندات نوراتو آماده شده است. محتوا از قراردادهای سیستم طراحی تغذیه خواهد شد.</p></CardContent></Card></section>}
    </main>
  </div>
}
function SectionTitle({ title, text }: { title: string; text: string }) { return <div className="section-title"><span className="eyebrow">NORATO / DOCS</span><h1>{title}</h1><p>{text}</p>{title === "کامپوننت‌ها" && <><FieldExample /><FieldGroup /><TreeView /><div className="tag-demo-card"><h3>Tag</h3><div><Tag /></div></div></>}</div> }
