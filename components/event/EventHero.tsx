'use client'

import styled from 'styled-components'
import Image from 'next/image'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const EventName = styled.h1`
  font-family: var(--font-title);
  font-size: 1.9rem;
  color: var(--accent);
  font-style: italic;
  margin-bottom: 0.5rem;
`

const EventDesc = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`

const BannerWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/7;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerPlaceholder = styled.div`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--text-main);
  text-align: center;
  line-height: 1.3;
`

export default function EventHero() {
  return (
    <Section>
      <EventName>Silent Snow Hidden Plum</EventName>
      <EventDesc>
        A light snow graces the shallow water;<br />
        Amidst deepening storms, the plum flowers.
      </EventDesc>

      <BannerWrapper>
        {/* Khi có ảnh thật:
          <Image src="/image/event-banner.jpg" alt="Silent Snow Hidden Plum" fill style={{ objectFit: 'cover' }} />*/}
        <BannerPlaceholder>
          Silent Snow,<br />
          <em style={{ color: 'var(--accent)' }}>Hidden Plum</em>
        </BannerPlaceholder>
      </BannerWrapper>
    </Section>
  )
}