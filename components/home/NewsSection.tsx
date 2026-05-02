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
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const NewsCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover { border-color: var(--accent); }
`

const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Body = styled.div`
  padding: 0.85rem 1rem;
`

const Tag = styled.span`
  display: inline-block;
  font-family: var(--font-title);
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0d0a07;
  background: var(--accent2);
  padding: 0.15rem 0.45rem;
  border-radius: 2px;
  margin-bottom: 0.4rem;
`

const NewsTitle = styled.div`
  font-family: var(--font-title);
  font-size: 0.88rem;
  color: var(--text-main);
  line-height: 1.4;
  margin-bottom: 0.4rem;
`

const NewsDesc = styled.p`
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.55;
`

const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background: var(--bg-card2);
  position: relative;
  overflow: hidden;
`

const newsItems = [
  {
    tag: 'Exclusive Skins',
    title: 'Exclusive Skins Revealed',
    desc: "Witness your Sinners in a new light. These exclusive Anniversary looks will only be available for a short window—don't miss out.",
    img: '/image/ExclusiveSkins.png',
  },
  {
    tag: 'Rerun SinnerS Limited',
    title: 'Exclusive Arrest Rerun Starts',
    desc: 'Are you ready to bring them into your custody, Chiefs???',
    img: '/image/RerunSinners.png'
  },
]

export default function NewsSection() {
  return (
    <Section>
      <SectionTitle>
        Special: Unveiling the Secrets of Eastia.
      </SectionTitle>
      <NewsGrid>
        {newsItems.map((item) => (
          <NewsCard key={item.title}>
            <CardImg>
              <Image src={item.img}
                  alt={item.tag}
                  fill
                  sizes="(max-width:600px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
              />
            </CardImg>
            <Body>
              <div><Tag>{item.tag}</Tag></div>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsDesc>{item.desc}</NewsDesc>
            </Body>
          </NewsCard>
        ))}
      </NewsGrid>
    </Section>
  )
}