import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil - Cook',
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
        <main>
        <Header />
        {children}
        </main>
        </body>
    </html>
  )
}
