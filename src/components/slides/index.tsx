'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { TestimonialType } from '@/lib/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { DotButton, useDotButton } from '../ui/carousel-dot-button'

import { fadeDownAnimation } from '@/lib/animations'
import { motion } from 'framer-motion'

type SlidesProps = {
  slides: TestimonialType[]
}

export function Slides({ slides }: SlidesProps) {
  const [api, setApi] = useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

  return (
    <div>
      <Carousel
        className=''
        setApi={setApi}
        opts={{
          align: 'start',
          loop: false
        }}>
        <motion.div {...fadeDownAnimation} transition={{ duration: 1 }}>
          <CarouselContent className='flex flex-nowrap gap-8 p-4 lg:gap-8'>
            {slides.map(slide => (
              <CarouselItem
                key={slide.id}
                className='flex h-max basis-full rounded px-8 shadow-carousel lg:basis-1/2'>
                <div className='space-y-6 py-8 lg:py-12'>
                  <blockquote className='relative indent-6 text-dark'>
                    <svg
                      width='17'
                      height='13'
                      viewBox='0 0 17 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute left-0 top-1'>
                      <path
                        d='M7.78906 1.64062C7.05469 2.0625 6.46094 2.42969 6.00781 2.74219C5.55469 3.03906 5.09375 3.4375 4.625 3.9375C4.1875 4.40625 3.85156 4.89844 3.61719 5.41406C3.38281 5.92969 3.21875 6.59375 3.125 7.40625H4.25C5.21875 7.40625 5.97656 7.64844 6.52344 8.13281C7.08594 8.60156 7.36719 9.29688 7.36719 10.2188C7.36719 10.875 7.11719 11.4922 6.61719 12.0703C6.13281 12.6328 5.46094 12.9141 4.60156 12.9141C3.25781 12.9141 2.29688 12.4766 1.71875 11.6016C1.14062 10.7109 0.851562 9.54687 0.851562 8.10938C0.851562 7.09375 1.07031 6.17187 1.50781 5.34375C1.94531 4.5 2.47656 3.75 3.10156 3.09375C3.74219 2.42187 4.42188 1.85156 5.14062 1.38281C5.85938 0.914062 6.46094 0.53125 6.94531 0.234375L7.78906 1.64062ZM16.4609 1.64062C15.7266 2.0625 15.1328 2.42969 14.6797 2.74219C14.2266 3.03906 13.7656 3.4375 13.2969 3.9375C12.8438 4.42188 12.5 4.92188 12.2656 5.4375C12.0469 5.9375 11.8906 6.59375 11.7969 7.40625H12.9219C13.8906 7.40625 14.6484 7.64844 15.1953 8.13281C15.7578 8.60156 16.0391 9.29688 16.0391 10.2188C16.0391 10.875 15.7891 11.4922 15.2891 12.0703C14.8047 12.6328 14.1328 12.9141 13.2734 12.9141C11.9297 12.9141 10.9688 12.4766 10.3906 11.6016C9.8125 10.7109 9.52344 9.54687 9.52344 8.10938C9.52344 7.09375 9.74219 6.17187 10.1797 5.34375C10.6172 4.5 11.1484 3.75 11.7734 3.09375C12.4141 2.42187 13.0938 1.85156 13.8125 1.38281C14.5312 0.914062 15.1328 0.53125 15.6172 0.234375L16.4609 1.64062Z'
                        fill='#69B99D'
                      />
                    </svg>
                    {slide.content}
                  </blockquote>

                  <footer className='inline-flex items-center gap-2'>
                    <figure>
                      <Image
                        src={slide.authorPhoto}
                        alt={`Foto de ${slide.authorName}`}
                        className='size-8 rounded-full object-cover object-center'
                      />
                    </figure>
                    <cite className='not-italic'>{slide.authorName}</cite>
                  </footer>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>

      <motion.div
        {...fadeDownAnimation}
        transition={{ duration: 0.8, delay: 0.05 }}
        className='mt-14 text-center text-sm'>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'inline-flex size-3 items-center justify-center rounded-full bg-gray/20 transition-colors duration-300',
                { 'bg-primary': index === selectedIndex }
              )}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
