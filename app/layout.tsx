
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import HeaderNew from './components/new-header'
import SmoothScroll from './components/SmoothScroll'
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'


const inter = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil - Personal Website',
  description: 'Deveoper Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
        <HeaderNew />
        {children}
        </SmoothScroll>
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  )
}
