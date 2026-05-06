'use client'

import styled from 'styled-components'
import Image from 'next/image'

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
  @media (max-width: 600px) { grid-template-columns: 1fr; }
  //@media (max-width: 600px) { grid-template-columns: 1fr 1fr; }
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
  aspect-ratio: 16/9;
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
  { 
    title: 'Silent Snow Hidden Plum', disc: 'Time-limited event', 
    img: '/image/Event.png',
  },
  { 
    title: 'Celebration Emotion Check', disc: 'The Special Rewards', 
    img: '/image/Event2.png'
  },
  { 
    title: 'Fortune Scratch', disc: 'Special Bonus', 
    img: '/image/Event3.png'
  },
  { 
    title: 'Snowlit Seclusion', disc: 'Exclusive Arrest', 
    img: '/image/Event4.png'
  },
  { 
    title: 'Untamed Gale', disc: 'Event Arrest', 
    img: '/image/Event5.png'
  },
  { 
    title: 'Cusp of a New Year', disc: 'Exclusive Arrest Rerun', 
    img: '/image/Event6.png'
  },
  { 
    title: 'Log in Reward', disc: 'Limited-Time', 
    img: '/image/Benefit1.png'
  },
  { 
    title: 'Treasure Gallery', disc: 'Limited-Time Attire Purchase Bonus', 
    img: '/image/Benefit2.png'
  },
  { 
    title: 'Golden Tribute', disc: 'Seasonal Pass', 
    img: '/image/Benefit3.png'
  },
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
              <Image src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }} 
              />
              
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