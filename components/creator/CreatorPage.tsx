'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = styled.div`
  width: 100%;
  background: var(--accent);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

const HeroTitle = styled.h1`
  font-family: var(--font-title);
  font-size: 2.5rem;
  color: var(--accent2);
  font-style: italic;
  letter-spacing: 0.03em;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const BtnYellow = styled.a`
  font-family: var(--font-title);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.55rem 1.3rem;
  border-radius: 4px;
  background: #c8961e;
  color: #0d0a07;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const BtnWhite = styled(Link)`
  font-family: var(--font-title);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.55rem 1.3rem;
  border-radius: 4px;
  background: #f0e8d4;
  color: #0d0a07;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const Content = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
`

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const CreatorName = styled.h2`
  font-family: var(--font-title);
  font-size: 1.6rem;
  color: var(--accent);
  letter-spacing: 0.04em;
`

const CreatorDesc = styled.p`
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.8;
`

const ProfileImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  position: relative;

  @media (max-width: 600px) {
    order: -1;
  }
`

const FbButton = styled.a`
  display: inline-block;
  margin-top: 1.25rem;
  font-family: var(--font-title);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.6rem 1.6rem;
  border-radius: 4px;
  background: #c8961e;
  color: #0d0a07;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

export default function CreatorPage() {
  return (
    <>
      <HeroBanner>
        <HeroTitle>Creator</HeroTitle>
        <BtnGroup>
          <BtnYellow href="#">Lê Kim Khánh</BtnYellow>
          <BtnWhite href="/">Return Home</BtnWhite>
        </BtnGroup>
      </HeroBanner>

      <Content>
        <ProfileGrid>
          <ProfileInfo>
            
            <CreatorName>Lê Kim Khánh</CreatorName>
            <CreatorDesc>
              Welcome! As a huge fan of Path to Nowhere, I created this site
              to keep the community updated on the upcoming event. Whether
              you&apos;re looking for schedules, rewards, or gameplay leaks,
              you&apos;ll find it all here.
            </CreatorDesc>

            <FbButton
              href="https://www.facebook.com/share/1Eb2bRte3v/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </FbButton>
          </ProfileInfo>

          <ProfileImgWrapper>
            <Image
              src="/image/Creator.png"
              alt="Creator"
              fill
              sizes="(max-width:600px) 100vw, 50vw"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </ProfileImgWrapper>
        </ProfileGrid>
      </Content>
    </>
  )
}