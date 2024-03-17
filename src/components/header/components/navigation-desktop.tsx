'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { fadeDownAnimation } from '@/lib/animations'
import { motion } from 'framer-motion'
import { NavigationLinkType } from '../types'

type NavigationDesktopProps = {
  links: NavigationLinkType[]
}
export function NavigationDesktop({ links }: NavigationDesktopProps) {
  const AnimationNavigationMenuItem = motion(NavigationMenuItem)
  const AnimationNavigationMenuList = motion(NavigationMenuList)

  return (
    <NavigationMenu className='ml-4 hidden flex-1 lg:block'>
      <AnimationNavigationMenuList
        transition={{ duration: 1, delay: 0.5 }}
        className='flex items-center justify-end gap-8'>
        {links.map((link, i) => (
          <AnimationNavigationMenuItem
            asChild
            key={link.id}
            /*
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            */
            {...fadeDownAnimation}
            transition={{ duration: 0.5, delay: 0.05 * i }}>
            <NavigationMenuLink
              href={link.url}
              className='text-base text-dark hover:text-primary'>
              {link.name}
            </NavigationMenuLink>
          </AnimationNavigationMenuItem>
        ))}
      </AnimationNavigationMenuList>
    </NavigationMenu>
  )
}
