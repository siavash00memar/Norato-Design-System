import * as React from "react"
import { cn } from "@/lib/utils"

export function Button({ className, variant = "default", size = "default", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost" | "third"; size?: "default" | "sm" }) {
  return <button className={cn("norato-button", `norato-button-${variant}`, size === "sm" && "norato-button-sm", className)} {...props} />
}
