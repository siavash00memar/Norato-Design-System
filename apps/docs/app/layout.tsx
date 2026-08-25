import './globals.css';
import './figma-refine.css';
import './typography-refine.css';
export const metadata = { title: 'نوراتو · Design System', description: 'دیزاین سیستم RTL-first نوراتو' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fa" dir="rtl"><head><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /></head><body>{children}</body></html>; }
