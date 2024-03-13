'use client'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'
import { NavigationLinkType } from '../types'

type NavigationMobileProps = {
  links: NavigationLinkType[]
}

export function NavigationMobile({ links }: NavigationMobileProps) {
  return (
    <div className='block lg:hidden'>
      <Dialog>
        <DialogTrigger className='rounded p-1 transition-all duration-300 hover:bg-primary/5'>
          <Icons.menuMobile className='size-6 text-primary ' />
        </DialogTrigger>
        <DialogContent className='flex h-[99vh] w-[98vw] flex-col items-center justify-center gap-16 rounded md:w-[99vw]'>
          {links.map(link => (
            <DialogTitle key={link.id} asChild>
              <Link
                href={link.url}
                className='text-3xl text-dark hover:text-primary'>
                {link.name}
              </Link>
            </DialogTitle>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  )
}
