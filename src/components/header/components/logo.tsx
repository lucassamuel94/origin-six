'use client'

import { Icons } from '@/components/ui/icons'
import { fadeDownAnimation } from '@/lib/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Logo() {
  const AnimationLink = motion(Link)
  return (
    <AnimationLink
      {...fadeDownAnimation}
      transition={{ duration: 0.7 }}
      href='/'>
      <Icons.logo className='h-6 w-auto' />
    </AnimationLink>
  )
}
