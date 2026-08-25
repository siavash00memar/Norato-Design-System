import * as React from "react"
import { cn } from "@/lib/utils"
export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("norato-card", className)} {...p} /> }
export function CardHeader({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("norato-card-header", className)} {...p} /> }
export function CardTitle({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className={cn("norato-card-title", className)} {...p} /> }
export function CardContent({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("norato-card-content", className)} {...p} /> }
