import { Icons } from '../ui/icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-primary text-background'>
      <div className='container flex flex-col py-16 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-col items-start'>
          <Icons.logoDark className='h-8 w-auto lg:h-10' />
          <span className='mt-6'>©{currentYear} Beautysalon.</span>
          <span className='mt-3'>Todos os direitos reservados.</span>
        </div>
        <ul className='flex items-center gap-8'>
          <li>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <Icons.instagram className='size-6 fill-primary transition-all duration-300 hover:scale-110' />
            </a>
          </li>

          <li>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <Icons.facebook className='size-6 fill-primary transition-all duration-300 hover:scale-110' />
            </a>
          </li>

          <li>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <Icons.youtube className='size-6 fill-primary transition-all duration-300 hover:scale-110' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
