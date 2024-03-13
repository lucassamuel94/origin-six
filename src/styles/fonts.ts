import { Poppins as FontHeading, DM_Sans as FontSans } from 'next/font/google'
export const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
})

export const fontHeading = FontHeading({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '700'
})
