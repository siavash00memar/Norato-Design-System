import * as React from "react"
import { cn } from "@/lib/utils"
export function Label({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) { return <label className={cn("norato-label", className)} {...p} /> }
