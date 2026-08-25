"use client"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
export const Dialog=DialogPrimitive.Root
export const DialogTrigger=DialogPrimitive.Trigger
export const DialogTitle=DialogPrimitive.Title
export const DialogDescription=DialogPrimitive.Description
export const DialogClose=DialogPrimitive.Close
export const DialogContent=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({className,...p},ref)=><DialogPrimitive.Portal><DialogPrimitive.Overlay className="norato-dialog-overlay"/><DialogPrimitive.Content ref={ref} className={cn("norato-dialog-content",className)} {...p}/></DialogPrimitive.Portal>)
DialogContent.displayName=DialogPrimitive.Content.displayName
