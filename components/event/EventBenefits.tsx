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
  text-align: center;
`

const SubLabel = styled.div`
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
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
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`

const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.6rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
`

const CardBody = styled.div`
  padding: 0.6rem 0.75rem;
`

const CardTitle = styled.div`
  font-family: var(--font-title);
  font-size: 0.78rem;
  color: var(--text-main);
  margin-bottom: 0.2rem;
`

const CardAuthor = styled.div`
  font-size: 0.78rem;
  color: var(--accent);
  font-style: italic;
`

const benefits = [
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
  { title: 'Title', disc: 'Author' },
]

export default function EventBenefits() {
  return (
    <Section>
      <SectionTitle>Events & Overflowing Benefits</SectionTitle>
      <SubLabel>Demo</SubLabel>
      <Grid>
        {benefits.map((item, i) => (
          <Card key={i}>
            <CardImg>
              {/* <Image src={`/image/benefit-${i}.jpg`} alt={item.title} fill style={{ objectFit: 'cover' }} /> */}
              Image
            </CardImg>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardAuthor>{item.disc}</CardAuthor>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}