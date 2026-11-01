import { CalendarDate, PersianCalendar, getDayOfWeek, toCalendar, toCalendarDate, fromDateToLocal } from '@internationalized/date'

export const jalaliCalendar = new PersianCalendar()
export type JalaliDate = `${number}-${number}-${number}`

export function parseJalaliDate(value?: string | null): CalendarDate | undefined {
  if (!value) return undefined
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return undefined
  try {
    const date = new CalendarDate(jalaliCalendar, Number(match[1]), Number(match[2]), Number(match[3]))
    return date.year === Number(match[1]) && date.month === Number(match[2]) && date.day === Number(match[3]) ? date : undefined
  } catch { return undefined }
}

export function serializeJalaliDate(date: CalendarDate): JalaliDate {
  return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}` as JalaliDate
}

export function todayJalaliDate(): CalendarDate {
  return toCalendarDate(toCalendar(fromDateToLocal(new Date()), jalaliCalendar))
}

export function calendarMonthCells(year: number, month: number): CalendarDate[] {
  const first = new CalendarDate(jalaliCalendar, year, month, 1)
  const offset = getDayOfWeek(first, 'fa-IR') // Persian locale starts on Saturday.
  const start = first.subtract({ days: offset })
  return Array.from({ length: 42 }, (_, index) => start.add({ days: index }))
}

export function formatJalaliDate(value?: string | null, options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }): string {
  const date = parseJalaliDate(value)
  return date ? new Intl.DateTimeFormat('fa-IR-u-ca-persian', { ...options, timeZone: 'UTC' }).format(date.toDate('UTC')) : ''
}
