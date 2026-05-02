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
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: center;
`

const SinnerRow = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: border-color 0.2s;
  &:hover { border-color: var(--accent); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
  grid-template-columns: 2fr 1fr;  
`

const SinnerImg = styled.div`
  width: 100%;
  aspect-ratio: 16/10;  /* ← tăng chiều cao hình */
  background: var(--bg-card2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`

const SinnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SinnerName = styled.div`
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--accent);
  letter-spacing: 0.04em;
`

const SinnerDesc = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  font-style: italic;
  line-height: 1.6;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
`

const BtnPrimary = styled.a`
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  background: var(--accent);
  color: #0d0a07;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const BtnSecondary = styled.a`
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--text-muted);
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
`

const sinners = [
  {
    name: 'Jichuan',
    desc: 'MBCC-S-124; Catalyst Tendency',
    img: '/image/Jichuan2.png',
  },
  {
    name: 'Xiaofeng',
    desc: 'MBCC-S-108; Fury Tendency',
    img: '/image/Xiaofeng2.png',
  },
  {
    name: 'Ayiguo',
    desc: 'MBCC-S-808; Endura Tendency',
    img: '/image/Ayiguo2.png',
  },
]

export default function NewSinners() {
  return (
    <Section>
      <SectionTitle>New Sinners – The Shackles Tighten</SectionTitle>
      {sinners.map((s, i) => (
        <SinnerRow key={i}>
          <SinnerImg>
            <Image src={s.img} 
                alt={s.name} 
                fill 
                sizes="(max-width: 600px) 100vw, 280px"
                style={{ objectFit: 'contain' }} />
            
          </SinnerImg>
          <SinnerInfo>
            <SinnerName>{s.name}</SinnerName>
            <SinnerDesc>{s.desc}</SinnerDesc>
            <BtnGroup>
              <BtnPrimary href="#">Coming soon</BtnPrimary>
              <BtnSecondary href="#">Pull</BtnSecondary>
            </BtnGroup>
          </SinnerInfo>
        </SinnerRow>
      ))}
    </Section>
  )
}