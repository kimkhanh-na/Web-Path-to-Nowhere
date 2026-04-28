'use client'

import styled from 'styled-components'

const Banner = styled.div`
  background: var(--accent);
  border-radius: 6px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`

const BannerText = styled.div`
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: #0d0a07;
  font-weight: 700;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 0.6rem;
`

const BtnDark = styled.button`
  background: #0d0a07;
  color: var(--accent);
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.45rem 1.1rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`

const BtnOutlineDark = styled.button`
  background: transparent;
  color: #0d0a07;
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.45rem 1.1rem;
  border-radius: 3px;
  border: 1.5px solid #0d0a07;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.7; }
`

export default function BannerCTA() {
  return (
    <Banner>
      <BannerText>3.5 year anniversary</BannerText>
      <BtnGroup>
        <BtnDark>Coming soon!</BtnDark>
        <BtnOutlineDark>EVENT</BtnOutlineDark>
      </BtnGroup>
    </Banner>
  )
}