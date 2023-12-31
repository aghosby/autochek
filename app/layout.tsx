import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/styles'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          <NavBar/>
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
