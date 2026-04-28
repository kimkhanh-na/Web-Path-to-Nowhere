'use client'

import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #0a0806;
  border-top: 1px solid var(--border);
  padding: 2.5rem 2.5rem 2rem;
`

const FooterInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const FooterLogo = styled.div`
  font-family: var(--font-title);
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
`

const Socials = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const SocialBtn = styled.a`
  width: 32px;
  height: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s;
  text-decoration: none;
  &:hover { border-color: var(--accent); }
`

const ColTitle = styled.h4`
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`

const ColLink = styled.a`
  display: block;
  font-size: 0.88rem;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 0.35rem;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`

const FooterBottom = styled.div`
  max-width: 860px;
  margin: 1.5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <div>
          <FooterLogo>LeKimKhanh</FooterLogo>
          <Socials>
            <SocialBtn href="#" title="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-muted)">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" title="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-muted)">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0806"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" title="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="var(--text-muted)"/>
              </svg>
            </SocialBtn>
          </Socials>
        </div>

        <div>
          <ColTitle>About Me</ColTitle>
          <ColLink href="#">Facebook: Chezzyna Feodora</ColLink>
          <ColLink href="#">Github: kimkhanh-na</ColLink>
          <ColLink href="#">Zalo: 0336......</ColLink>
        </div>

        <div>
          <ColTitle>About Game</ColTitle>
          <ColLink href="#">X: @PathtoNowhereEN</ColLink>
          <ColLink href="#">Facebook: Path to Nowhere</ColLink>
          <ColLink href="#">Youtube: @pathtonowhere</ColLink>
        </div>
      </FooterInner>

      <FooterBottom>
        <span>© 2026 LeKimKhanh · Fansite · Not affiliated with Aisno Games</span>
        <span>Path to Nowhere © Aisno Games</span>
      </FooterBottom>
    </FooterWrapper>
  )
}