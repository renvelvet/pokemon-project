import Image from 'next/image'
import './globals.css'
import { Noto_Sans_Display } from 'next/font/google'
import Navbar from './Navbar'

const noto = Noto_Sans_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokémon Decks',
  description: 'An interactive web app where you can catch your own pokémon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary ${noto.className}`}>
        <Navbar />
        <main className="container mx-auto min-h-screen max-w-7xl pt-8">
          {children}
        </main>
      </body>
    </html>
  )
}
