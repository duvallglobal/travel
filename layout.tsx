import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Planner PWA',
  description: 'A comprehensive travel planning and management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <nav className="w-64 bg-white shadow-lg">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-blue-600">Travel Planner</h1>
            </div>
            <ul className="space-y-2 p-4">
              <li><Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Dashboard</Link></li>
              <li><Link href="/expenses" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Expenses</Link></li>
              <li><Link href="/trips" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Trips</Link></li>
              <li><Link href="/budget" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Budget</Link></li>
              <li><Link href="/planner" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Planner</Link></li>
              <li><Link href="/research" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Research</Link></li>
              <li><Link href="/clients" className="block py-2 px-4 text-gray-700 hover:bg-blue-100 rounded">Clients</Link></li>
            </ul>
          </nav>
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

