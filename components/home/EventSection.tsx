'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import CountdownModal from '../CountdownModal'

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

const EventBlock = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const EventInfo = styled.div`
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`

const EventLabel = styled.div`
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--accent2);
  text-transform: uppercase;
`

const EventName = styled.div`
  font-family: var(--font-title);
  font-size: 1.3rem;
  color: var(--accent);
  line-height: 1.3;
`

const EventDesc = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.6;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

const BtnPrimary = styled.a`
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
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const BtnOutline = styled.a`
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.45rem 1.2rem;
  border-radius: 3px;
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--text-muted);
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
`

const EventImg = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background: var(--bg-card2);
  position: relative;
  overflow: hidden;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // min-height: 220px;
  // border-left: 1px solid var(--border);
  // padding: 2rem;
  // text-align: center;
  // font-family: var(--font-title);
  // font-size: 1.9rem;
  // color: var(--text-main);
  // line-height: 1.2;
`

export default function EventSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Section>
      <SectionTitle>Event Coming Soon!</SectionTitle>
      <EventBlock>
        <EventInfo>
          <EventLabel>Upcoming Event</EventLabel>
          <EventName>Silent Snow, Hidden Plum</EventName>
          <EventDesc>
            A light snow graces the shallow water;<br />
            Amidst deepening storms, the plum flowers.
          </EventDesc>
          <BtnGroup>
            <BtnPrimary href="/" onClick={(e) => { e.preventDefault(); setShowModal(true) }}>
              Coming Soon!
            </BtnPrimary>
            <BtnOutline href="/event">EVENT</BtnOutline>
          </BtnGroup>
        </EventInfo>
        <EventImg>
          <Image
            src="/image/EventSection.png"
            alt="Silent Snow, Hidden Plum"
            fill
            sizes='(max-width: 600px) 100vw, 50vw'
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          Silent<br /><em style={{ color: 'var(--accent)' }}>Snow,</em><br />Hidden<br />Plum
        </EventImg>
      </EventBlock>

      <CountdownModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </Section>
  )
}