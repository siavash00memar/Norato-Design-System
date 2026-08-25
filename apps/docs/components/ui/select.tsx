"use client"
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cn } from "@/lib/utils"
export const Select=SelectPrimitive.Root
export const SelectGroup=SelectPrimitive.Group
export const SelectValue=SelectPrimitive.Value
export const NORATO_SELECT_ARROW="https://www.figma.com/api/mcp/asset/04fe8b44-2bd0-403e-8f78-15538ff3b870.svg"
export const SelectTrigger=React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>,React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({className,children,...p},ref)=><SelectPrimitive.Trigger ref={ref} className={cn("norato-input norato-select-trigger",className)} {...p}>{children}<img className="norato-select-arrow" src={NORATO_SELECT_ARROW} alt="" aria-hidden="true" /></SelectPrimitive.Trigger>)
SelectTrigger.displayName=SelectPrimitive.Trigger.displayName
export const SelectContent=React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>,React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({className,...p},ref)=><SelectPrimitive.Portal><SelectPrimitive.Content ref={ref} className={cn("norato-select-content",className)} {...p}/></SelectPrimitive.Portal>)
SelectContent.displayName=SelectPrimitive.Content.displayName
export const SelectItem=React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>,React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({className,...p},ref)=><SelectPrimitive.Item ref={ref} className={cn("norato-select-item",className)} {...p}/>)
SelectItem.displayName=SelectPrimitive.Item.displayName
