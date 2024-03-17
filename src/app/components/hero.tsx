'use client'
import { Button } from '@/components/ui/button'
import { fadeDownAnimation, fadeUpAnimation } from '@/lib/animations'
import pictureHero from '@/public/hero.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className=' overflow-x-hidden bg-background py-28'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='container flex flex-col gap-8 lg:flex-row-reverse lg:gap-28'>
        <motion.figure
          {...fadeDownAnimation}
          transition={{ duration: 1, delay: 0.03 }}
          className='relative z-0 -ml-10 flex-1 shadow-xl shadow-secondary/30 md:ml-0'>
          <Image
            src={pictureHero}
            alt='Uma mulher usando um secador de cabelo para soprar o cabelo'
            placeholder='blur'
            className='rounded'
          />
          <span className='absolute -right-10 -top-10 -z-10 h-full w-full rounded bg-secondary'></span>
        </motion.figure>

        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 1, delay: 0.03 }}
          className='flex flex-col items-center justify-center lg:w-[396px] lg:items-start'>
          <h2 className='lg"text-4xl text-3xl'>
            Saúde natural para os seus cabelos
          </h2>
          <p className='mt-4 lg:text-lg'>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>

          <Button className='mt-8'>Agendar um horário</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
