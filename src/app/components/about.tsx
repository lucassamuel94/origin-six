'use client'

import { fadeDownAnimation, fadeUpAnimation } from '@/lib/animations'
import { motion, useScroll, useTransform } from 'framer-motion'

import pictureAbout from '@/public/about.jpg'
import Image from 'next/image'
import { useRef } from 'react'

export function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  return (
    <section id='sobre'>
      <motion.div
        className='container flex flex-col gap-16 py-20 lg:flex-row lg:py-40'
        initial={{ x: -200, scale: 0.8 }}
        whileInView={{ x: 0, scale: 1 }}
        exit={{ x: -200, scale: 1.02 }}
        transition={{ duration: 1, delay: 0.8 }}
        ref={containerRef}
        style={{ scale: scale }}>
        <motion.figure
          {...fadeDownAnimation}
          transition={{ duration: 1, delay: 1 }}
          className='relative z-0 -ml-6 flex-1 md:-ml-[19%]'>
          <Image
            src={pictureAbout}
            alt='Uma mulher usando um secador de cabelo para soprar o cabelo'
            placeholder='blur'
            className='aspect-[1/0.66] rounded object-cover object-center lg:h-[412px]'
          />
          <span className='absolute -left-10 -top-10 -z-10 h-[98%] w-full rounded bg-secondary'></span>
        </motion.figure>

        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 1, delay: 1.03 }}
          className='flex flex-col lg:flex-1 lg:items-start'>
          <h3 className='lg"text-4xl text-3xl'>Sobre nós</h3>
          <p className='mt-4 text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. <br /> <br /> Nullam in est porta, pellentesque massa
            vitae, vehicula risus. In placerat, felis vitae sodales dictum,
            lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id
            ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit,
            tortor augue vulputate sapien, vitae feugiat enim augue sed. Quisque
            id aliquam elit. <br /> <br />
            Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod
            dictum. Sed sodales est efficitur arcu tincidunt tincidunt.
            Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt
            tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget
            dui at sem ullamcorper luctus.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
