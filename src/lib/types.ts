import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type TestimonialType = {
  id: string,
  authorName: string,
  authorPhoto: string | StaticImport,
  content: string
}
