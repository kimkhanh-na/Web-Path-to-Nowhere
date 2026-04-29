import CharacterHero from '@/components/character/CharacterHero'
import NewSinners from '@/components/character/NewSinners'
import LimitedRerun from '@/components/character/LimitedRerun'
import PullRecommendations from '@/components/character/PullRecommendations'

export default function CharacterPage() {
  return (
    <main>
      <CharacterHero />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <NewSinners />
        <LimitedRerun />
        <PullRecommendations />
      </div>
    </main>
  )
}