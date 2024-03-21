import { Header } from '@/components/header'
import { Divider } from '@/components/ui/divider'
import { About } from './components/about'
import { Hero } from './components/hero'
import { Services } from './components/services'

export default function HomeApp() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider direction='right' />
      <About />
      <Divider direction='left' />
      <Services />
      <Divider direction='right' />
    </main>
  )
}
