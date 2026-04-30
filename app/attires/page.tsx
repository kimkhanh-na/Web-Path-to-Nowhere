import AttiresHero from '@/components/attires/AttiresHero'
import AttiresGrid from '@/components/attires/AttiresGrid'

export default function AttiresPage() {
  return (
    <main>
      <AttiresHero />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
        <AttiresGrid />
      </div>
    </main>
  )
}