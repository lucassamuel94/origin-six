import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import { fontHeading, fontSans } from '@/styles/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Origin Six',
  description: 'Projeto disponibilizado pela rocketseat na nlw#6 trilha web'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'min-h-screen bg-white font-sans text-gray antialiased'
        )}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
