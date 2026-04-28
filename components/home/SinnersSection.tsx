'use client'

import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.35rem;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 600px) { grid-template-columns: 1fr 1fr; }
`

const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`

const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
`

const CardBody = styled.div`
  padding: 0.65rem 0.75rem;
`

const CardTitle = styled.div`
  font-family: var(--font-title);
  font-size: 0.78rem;
  color: var(--accent);
  letter-spacing: 0.04em;
  margin-bottom: 0.2rem;
`

const CardSub = styled.div`
  font-size: 0.82rem;
  color: var(--text-muted);
  font-style: italic;
`

const sinners = [
  { id: 'MBCC-S-108' },
  { id: 'MBCC-S-124' },
  { id: 'MBCC-S-808' },
]

export default function SinnersSection() {
  return (
    <Section>
      <SectionTitle>New Sinner Coming Soon</SectionTitle>
      <Grid>
        {sinners.map((s) => (
          <Card key={s.id}>
            <CardImg>New Sinner<br />Coming Soon</CardImg>
            <CardBody>
              <CardTitle>Profile No: {s.id}</CardTitle>
              <CardSub>Tendency: Unable to Resolve</CardSub>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}