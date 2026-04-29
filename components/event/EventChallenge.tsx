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

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const ImgBlock = styled.div`
  aspect-ratio: 4/3;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
`

export default function EventChallenge() {
  return (
    <Section>
      <SectionTitle>Ultimate Challenge</SectionTitle>
      <ImgGrid>
        <ImgBlock>
          {/* <Image src="/image/challenge-1.jpg" alt="Challenge 1" fill style={{ objectFit: 'cover' }} /> */}
          Image Placeholder
        </ImgBlock>
        <ImgBlock>
          {/* <Image src="/image/challenge-2.jpg" alt="Challenge 2" fill style={{ objectFit: 'cover' }} />  */}
          Image Placeholder
        </ImgBlock>
      </ImgGrid>
    </Section>
  )
}