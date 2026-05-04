'use client'

import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.35rem;
  color: var(--accent);
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const RecommendCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`

const CharName = styled.h3`
  font-family: var(--font-title);
  font-size: 1rem;
  color: var(--accent);
  letter-spacing: 0.04em;
`

const CharDesc = styled.p`
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
`

const recommendations = [
  {
    name: 'Jichuan',
    icon: '🔒',
    desc: 'The highest priority among the current banners. Her ability to buff ATK, elemental damage, provide defensive support, and accelerate energy regeneration allows Jichuan to fit into all popular team comps, especially the upcoming Wind-Overlimit team. DO NOT SKIP. Jichuan is very strong overall, S1 recommended for all players.',
    
  },
  {
    name: 'Yingying',
    icon: '🔒',
    desc: 'In my opinion, you should get at least S0. Recommended Shackles: S0 is enough for now. If you have spare cubes, S1 expands her skill range for better positioning. For high investment or fans of the character, S3 is the sweet spot.',
  },
  {
    name: 'Yao',
    icon: '🔒',
    desc: 'Must Reforge; if not, skip her entirely. Recommended Shackles: For RF Yao, S0 is sufficient. If you like her, S1 or S3 is the limit. Given the current economy and 4 limited banners in one event, S0 is plenty for newbies and F2P players.',
  },
  {
    name: 'Deren',
    icon: '🔒',
    desc: "Man, Deren is so re-employed! She fits a somewhat similar role to RF Adela, doing a frick-ton of CRIT damage on their ECB to delete bosses at the end of a fight. Deren is a little more versatile with better flexibility on her Ult to deal damage and corebreaks. However, she has to compete for the main DPS slot in Crit teams against Adela RF and Bai Yi RF. Since she also requires at least S1, she is a safe skip.",
  },
  {
    name: 'Xiaofeng',
    icon: '🔒',
    desc: "Consider skipping if you already have Zoya RF as your main Overlimit DPS and are low on cubes. Recommended Shackles: S1 is the most optimal. If you have extra resources, S3 and S4 offer significant damage boosts.",
  },
  {
    name: 'Ayiguo',
    icon: '🔒',
    desc: "Because she's an A-rank, she's definitely going to be off when you roll.",
  },
]

export default function PullRecommendations() {
  return (
    <Section>
      <SectionTitle>Pull Recommendations</SectionTitle>
      <Grid>
        {recommendations.map((r) => (
          <RecommendCard key={r.name}>
            <IconRow>
              <span style={{ fontSize: '1.1rem' }}>{r.icon}</span>
              <CharName>{r.name}</CharName>
            </IconRow>
            <CharDesc>{r.desc}</CharDesc>
          </RecommendCard>
        ))}
      </Grid>
    </Section>
  )
}