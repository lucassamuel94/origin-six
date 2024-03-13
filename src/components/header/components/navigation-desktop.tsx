'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { NavigationLinkType } from '../types'

type NavigationDesktopProps = {
  links: NavigationLinkType[]
}
export function NavigationDesktop({ links }: NavigationDesktopProps) {
  return (
    <NavigationMenu className='ml-4 hidden flex-1 lg:block'>
      <NavigationMenuList className='flex items-center justify-end gap-8'>
        {links.map(link => (
          <NavigationMenuItem asChild key={link.id}>
            <NavigationMenuLink
              href={link.url}
              className='text-base text-dark hover:text-primary'>
              {link.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
