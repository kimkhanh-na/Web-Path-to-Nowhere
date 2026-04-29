import EventHero from '@/components/event/EventHero'
import EventBenefits from '@/components/event/EventBenefits'
import EventChallenge from '@/components/event/EventChallenge'

export default function EventPage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
      <EventHero />
      <EventBenefits />
      <EventChallenge />
    </main>
  )
}