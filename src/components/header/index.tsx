import Link from 'next/link'

import { Icons } from '@/components/ui/icons'
import { NavigationDesktop } from './components/navigation-desktop'
import { NavigationMobile } from './components/navigation-mobile'
import { NavigationLinkType } from './types'

export function Header() {
  const links: NavigationLinkType[] = [
    {
      id: 'c6c381fc-7dc3-4b09-82fc-653cde69cdaa',
      name: 'Home',
      url: '/'
    },
    {
      id: 'c8e856fb-2c55-4007-aa3e-62e449c1f958',
      name: 'Sobre',
      url: '#sobre'
    },
    {
      id: '5374ec40-f624-4d3f-8812-9816089e826d',
      name: 'Serviços',
      url: '#servicos'
    },
    {
      id: 'd0db3223-dbb5-4a7c-8eb1-397053ec6a5f',
      name: 'Depoimentos',
      url: '#depoimentos'
    },
    {
      id: 'd631901d-c311-430a-ac2b-addc2cb7fd13',
      name: 'Contato',
      url: '#contato'
    }
  ]
  return (
    <header className='border-b border-light-gray bg-background'>
      <div className='container flex h-18 w-full shrink-0 items-center justify-between px-4 md:px-6'>
        <Link href='/'>
          <Icons.logo className='h-6 w-auto' />
        </Link>

        <>
          <NavigationDesktop links={links} />
          <NavigationMobile links={links} />
        </>
      </div>
    </header>
  )
}
