'use client'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { fadeDownAnimation } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id='contato' className='bg-background'>
      <div className='container flex flex-col gap-16 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-40'>
        <motion.div className='max-w-[404px]'>
          <motion.h3
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.02 }}
            className='max-w-[266px] text-3xl sm:max-w-none lg:text-4xl'>
            Entre em contato com a gente!
          </motion.h3>
          <motion.p
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.05 }}
            className='mt-4 lg:text-lg'>
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </motion.p>

          <motion.div
            className='mt-8'
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.08 }}>
            <Button asChild>
              <a
                href='https://www.whatsapp.com/?lang=pt_BR'
                target='_blank'
                rel='noopener noreferrer'>
                <Icons.whatsApp className='size-6' />
                <span>Entrar em contato</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul className='space-y-4'>
          <motion.li
            className='transition-colors duration-300 hover:text-primary'
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.02 }}>
            <a
              href='tel:+5511998456754'
              className='inline-flex items-center gap-3'>
              <Phone className='size-6 text-primary' />
              <span>11 99845-6754</span>
            </a>
          </motion.li>

          <motion.li
            className='transition-colors duration-300 hover:text-primary'
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.1 }}>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3'>
              <MapPin className='size-6 text-primary' />
              <span>R. Amauri Souza, 346</span>
            </a>
          </motion.li>

          <motion.li
            className='transition-colors duration-300 hover:text-primary'
            {...fadeDownAnimation}
            transition={{ duration: 0.8, delay: 0.15 }}>
            <a
              href='mailto:contato@beautysalon.com'
              className='inline-flex items-center gap-3'>
              <Mail className='size-6 text-primary' />
              <span>contato@beautysalon.com</span>
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}
