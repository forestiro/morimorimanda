import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import UserNav from '@/components/UserNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Student Syllabus',
  description: '学生のためのキャリアプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <UserNav />
        <Sidebar />
        <main className="ml-64 p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
