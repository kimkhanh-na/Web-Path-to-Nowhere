'use client'

import styled from 'styled-components'
import Image from 'next/image'

const HeroWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/7;
  position: relative;
  overflow: hidden;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroPlaceholder = styled.div`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--text-main);
  text-align: center;
  line-height: 1.3;
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`

export default function CharacterHero() {
  return (
    <HeroWrapper>
      
      <Image 
          src="/image/Character.png" 
          alt="Character Hero" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority />

      <Overlay/>
      
      <HeroPlaceholder>
        NEW SINNER<br />
        <em style={{ color: 'var(--accent)' }}>Coming soon</em>
      </HeroPlaceholder>
    </HeroWrapper>
  )
}