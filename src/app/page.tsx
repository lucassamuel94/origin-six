import { Header } from '@/components/header'
import { Divider } from '@/components/ui/divider'
import { Hero } from './components/hero'

export default function HomeApp() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider direction='right' />
    </main>
  )
}
