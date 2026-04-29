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

export default function CharacterHero() {
  return (
    <HeroWrapper>
      {/* Khi có ảnh thật:
        <Image src="/image/character-hero.jpg" alt="Character Hero" fill style={{ objectFit: 'cover' }} priority />*/}
      <HeroPlaceholder>
        Silent Snow,<br />
        <em style={{ color: 'var(--accent)' }}>Hidden Plum</em>
      </HeroPlaceholder>
    </HeroWrapper>
  )
}