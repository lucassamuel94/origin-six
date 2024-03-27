'use client'
import { Slides } from '@/components/slides'
import { TestimonialType } from '@/lib/types'

import { motion } from 'framer-motion'

import { fadeDownAnimation } from '@/lib/animations'
import photo01 from '@/public/photo01.jpg'
import photo02 from '@/public/photo02.jpg'
import photo03 from '@/public/photo03.jpg'

export function Testimonials() {
  const testimonials: TestimonialType[] = [
    {
      id: 'c6f6767b-538a-4255-97e0-62a6e6db8b25',
      authorName: 'Wanessa Souza',
      authorPhoto: photo01,
      content:
        'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados. '
    },
    {
      id: 'c9491e89-a90e-42cf-80e0-bcb49f73b56e',
      authorName: 'Luna Falcão',
      authorPhoto: photo02,
      content:
        'Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.'
    },
    {
      id: '854bcbd8-5018-4e0d-a604-3e03006ef172',
      authorName: 'Maria Santos',
      authorPhoto: photo03,
      content:
        'Minha visita ao Beautysalon foi tão emocionante! Recebi uma manicure e pedicure impecável, com atenção aos detalhes e alto nível de higiene. Não só saí com as unhas perfeitas, mas também me senti relaxada. Eu recomendaria este lugar para quem procura serviços de beleza de alta qualidade.'
    }
  ]

  return (
    <section className='overflow-hidden'>
      <div className='container space-y-16 py-40 '>
        <motion.h3
          {...fadeDownAnimation}
          transition={{ duration: 0.5 }}
          className='mx-auto max-w-lg text-center text-3xl lg:text-4xl'>
          Depoimentos de quem já passou por aqui
        </motion.h3>
        <Slides slides={testimonials} />
      </div>
    </section>
  )
}
