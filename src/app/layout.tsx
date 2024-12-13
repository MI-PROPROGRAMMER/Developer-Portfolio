// src/app/layout.tsx
import { Inter } from 'next/font/google'
import { defaultMetadata } from './metadata'
import ParticleBackground from '@/components/background/ParticleBackground'
import AudioPlayer from '@/components/background/AudioPlayer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ParticleBackground />
        <AudioPlayer />
        <ScrollToTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}