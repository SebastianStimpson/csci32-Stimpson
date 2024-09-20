import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react' // Importing React to use React.Fragment
import '@repo/ui/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Painter's Portfolio",
  description: 'A portfolio showcasing painting works and services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Header */}

      <body>
        <header className="bg-white shadow">
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">John Smith</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main className="container mx-auto py-12">{children}</main>

        {/* Footer */}
        <footer className="bg-white p-6 mt-12 text-center">
          <p>© 2024 Painter&apos;s R&apos;S. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
