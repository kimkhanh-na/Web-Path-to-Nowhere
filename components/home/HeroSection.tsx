'use client'

import styled from 'styled-components'

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
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 3rem;
  text-align: center;
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
  return (
    <Section>
      <Title>3.5 Year Anniversary</Title>
      <Desc>Chief, a mysterious silhouette has been detected from Eastia… 
        It appears to be a swordsman with a raised blade. Could this be a challenge?
        MBCC is already tracking the signal. Awaiting your arrival to uncover the truth.</Desc>
      <Btn href="/">Coming Soon!</Btn>
      <Banner>
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