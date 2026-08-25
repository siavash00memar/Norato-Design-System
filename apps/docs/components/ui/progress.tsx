import { cn } from "@/lib/utils"
export function Progress({ value = 0, className }: { value?: number; className?: string }) { return <div role="progressbar" aria-valuenow={value} className={cn("norato-progress", className)}><span style={{ width: `${value}%` }} /></div> }
