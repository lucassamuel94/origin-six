'use client'
import { Icons } from '@/components/ui/icons'
import { fadeDownAnimation } from '@/lib/animations'
import { motion } from 'framer-motion'
import { ElementType } from 'react'

type ServiceType = {
  id: string,
  name: string,
  icon: ElementType,
  description: string
}

export function Services() {
  const services: ServiceType[] = [
    {
      id: 'c4bd0597-ad74-4746-a5aa-4ab649ed0bdf',
      name: 'Terapia capilar',
      icon: Icons.terapiaCapilar,
      description:
        'Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.'
    },
    {
      id: 'e71eaedc-30f6-4911-bccd-c64ed50ccf97',
      name: 'Cortes',
      icon: Icons.cortes,
      description:
        'A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.'
    },
    {
      id: '7f46fbd2-ae32-498e-abf7-2176ca9dcf33',
      name: 'Tratamentos',
      icon: Icons.tratamentos,
      description:
        'O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.'
    }
  ]
  return (
    <section id='servicos' className='bg-background'>
      <div className='container py-20 lg:py-40'>
        <header className='max-w-lg space-y-3 text-left lg:mx-auto lg:text-center'>
          <h2 className='text-3xl lg:text-4xl'>Serviços</h2>
          <p className='lg:text-lg'>
            Com mais de 10 anos no mercado, o{' '}
            <strong className='text-primary'>Beautysalon</strong> já conquistou
            clientes de inúmeros países com seus tratamentos exclusivos e
            totalmente naturais
          </p>
        </header>

        <ul className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map(({ id, name, description, icon: Icon }, i) => (
            <motion.li
              key={id}
              className='flex flex-col items-center rounded-sm border-b-4 border-primary px-8 py-14 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:scale-105 hover:bg-white/50 hover:shadow-2xl lg:px-12'
              {...fadeDownAnimation}
              transition={{ duration: 0.5, delay: 0.5 * i }}>
              <Icon className='size-20 text-primary' />
              <h4 className='mt-6 text-2xl'>{name}</h4>
              <p className='mt-3'>{description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
