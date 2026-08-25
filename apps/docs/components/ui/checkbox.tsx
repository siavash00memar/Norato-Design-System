"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & { indeterminate?: boolean }
export function Checkbox({ className, indeterminate = false, ...p }: CheckboxProps) { const ref = React.useRef<HTMLInputElement>(null); React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate }, [indeterminate]); return <span className={cn("norato-checkbox-control", className)}><input ref={ref} type="checkbox" className="norato-checkbox-input" {...p} /><span aria-hidden="true" className="norato-checkbox-visual"><img src="/icons/checkbox-empty.svg" alt="" /><img src="/icons/checkbox-checked.svg" alt="" /><img src="/icons/checkbox-half.svg" alt="" /></span></span> }
