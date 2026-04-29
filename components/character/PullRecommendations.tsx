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
    desc: 'AISNO looked at our Path to Catalyst jokes and went hmm, how about we make two overpowered God-tier Catalysts… and then combine them into one Sinner? And thus Jichuan was born. Any shackles you can get will be really good; S0 high uptime 40% ATK buff, 20% Skill Damage Dealt, AND an Energy-refunding gimmick.',
  },
  {
    name: 'Yingying',
    icon: '🔒',
    desc: 'AISNO misspelled her name, which is "role compression". At S0/S1 she can slow, deal solid AoE damage, and hit an AoE 3 corebreak. At S3, she brings a whopping 24% damage taken amp, and S4 is essentially a free Cabernet ECB on all elite mobs.',
  },
  {
    name: 'Yao',
    icon: '🔒',
    desc: 'RF Yao is not particularly shackle reliant (nice!) but is somewhat team reliant (boooo) and really wants to be played with Jichuan, and to a lesser extent Lichen. Slight point deduction to Yao\'s rating as Lichen is a S-Rank that is strictly used for Burn team.',
  },
  {
    name: 'Deren',
    icon: '🔒',
    desc: 'Man, Deren is so re-employed! She fits a somewhat similar role to RF Adela, doing a frick-ton of CRIT damage on their ECB to delete bosses at the end of a fight. Deren is a little more versatile with better flexibility on her Ult to deal damage and corebreaks.',
  },
  {
    name: 'Xiaofeng',
    icon: '🔒',
    desc: "S0 Xiaofeng is not really a full character; due to how Overlimit works, you tend to end up needing that extra starting energy to just get the Tiger Spirits out ASAP. Also, her S3 and S4 respectively are pretty big (and important) damage spikes, as otherwise you'd need a fairly stacked team to support her at low shackles, strong gameplay knowledge, and a willingness to babysit the Overlimit meter in stages lacking cores. While she tears up maps at high shackles, it's a far cry from the performance of Jichuan shackle-for-shackle, the other S-Rank released with her.",
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