import HeroSection from '@/components/home/HeroSection'
import SinnersSection from '@/components/home/SinnersSection'
import EventSection from '@/components/home/EventSection'
import NewsSection from '@/components/home/NewsSection'
import CodesSection from '@/components/home/CodesSection'
import BannerCTA from '@/components/home/BannerCTA'

export default function HomePage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
      <HeroSection />
      <SinnersSection />
      <EventSection />
      <NewsSection />
      <CodesSection />
      <BannerCTA />
    </main>
  )
}