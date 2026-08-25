"use client"
import * as React from "react"
export function Tag({ children = "لورم ایپسوم متن ساختگی با تولید", onRemove }: { children?: React.ReactNode; onRemove?: () => void }) { return <span className="norato-tag"><span>{children}</span><button type="button" aria-label="حذف برچسب" onClick={onRemove}><img src="https://www.figma.com/api/mcp/asset/29a42bc1-4d33-4719-9268-fb1ca84f2d15.svg" alt="" /></button></span> }
