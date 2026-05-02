'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import CountdownModal from '../CountdownModal'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const Title = styled.h1`
  font-family: var(--font-title);
  font-size: 1.9rem;
  color: var(--accent);
  letter-spacing: 0.04em;
  margin-bottom: 0.6rem;
`

const Desc = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 500px;
  margin-bottom: 1.2rem;
  font-style: italic;
`

const Btn = styled.a`
  display: inline-block;
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.45rem 1.2rem;
  border-radius: 3px;
  background: var(--accent);
  color: #0d0a07;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const Banner = styled.div`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  margin-top: 1rem;
  background: var(--bg-card);
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const BannerImg = styled.div`
  position: relative;
  min-height: 300px;
  height: 100%;
  overflow: hidden;
`

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  text-align: center;
  border-left: 1px solid var(--border);
  
  @media (max-width: 600px) {
    border-left: none;
    border-top: 1px solid var(--border);
  }
`

const Tag = styled.div`
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--accent2);
  text-transform: uppercase;
  border: 1px solid var(--accent2);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  margin-bottom: 0.5rem;
`

const BannerTitle = styled.div`
  font-family: var(--font-title);
  font-size: 2.2rem;
  color: var(--text-main);
  line-height: 1.15;
`

const Sub = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
`

const AccentSub = styled.p`
  color: var(--accent);
  font-size: 0.9rem;
  font-style: italic;
`

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Section>
      <Title>3.5 Year Anniversary</Title>
      <Desc>
        Chief, a mysterious silhouette has been detected from Eastia… 
        It appears to be a swordsman with a raised blade. Could this be a challenge?
        MBCC is already tracking the signal. Awaiting your arrival to uncover the truth.
      </Desc>
      <Btn href="#" onClick={(e) => {e.preventDefault(); setShowModal(true) }}>
        Coming Soon!
      </Btn>
      <CountdownModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      <Banner>
        <BannerImg>
          <Image
            src="/image/Intro.png"
            alt="3.5 Year Anniversary"
            fill
            sizes='(max-width: 600px) 100vw, 50vw'
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </BannerImg>
	       
        <Placeholder>
          <Tag>Path to Nowhere</Tag>
          <BannerTitle>
            3.5 Year Anniversary<br />Preview Livestream
          </BannerTitle>
          <Sub>Unveiling the Secrets of Eastia</Sub>
          <AccentSub>April 25, 19:00 (UTC-7) · Livestream on YouTube</AccentSub>
        </Placeholder>
      </Banner>
    </Section>
  )
}