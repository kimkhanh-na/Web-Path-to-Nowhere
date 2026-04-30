'use client'

import styled from 'styled-components'
import Image from 'next/image'

const HeroWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/7;
  position: relative;
  overflow: hidden;
  background: var(--bg-card);
`

export default function AttiresHero() {
  return (
    <HeroWrapper>
      
        <Image src="/image/Attires.png" 
            alt="New Attires" 
            fill
            sizes="100vw" 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
            priority 
        />
    </HeroWrapper>
  )
}