"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
export function RadioGroup({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) { return <div role="radiogroup" className={cn("norato-radio-group", className)} {...p} /> }
export function RadioGroupItem({ className, ...p }: React.InputHTMLAttributes<HTMLInputElement>) { return <span className={cn("norato-radio-control", className)}><input type="radio" className="norato-radio-input" {...p} /><span aria-hidden="true" className="norato-radio-visual"><img src="/icons/radio-empty.svg" alt="" /><img src="/icons/radio-checked.svg" alt="" /></span></span> }
