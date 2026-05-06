'use client'

import styled from 'styled-components'
import { Typography, Divider } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import { guides } from '@/data/guides'

const { Paragraph } = Typography

/* ── Tabs ── */
const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
`

const Tab = styled.button<{ $active: boolean }>`
  font-family: var(--font-title);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.45rem 1.1rem;
  border-radius: 4px;
  border: 1px solid ${p => p.$active ? 'var(--accent)' : 'var(--border)'};
  background: ${p => p.$active ? 'var(--accent)' : 'transparent'};
  color: ${p => p.$active ? '#0d0a07' : 'var(--text-muted)'};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: var(--accent);
    color: ${p => p.$active ? '#0d0a07' : 'var(--accent)'};
  }
`

/* ── Wrappers ── */
const PageWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
`

const PageTitle = styled.h1`
  font-family: var(--font-title);
  font-size: 1.8rem;
  color: var(--accent);
  font-style: italic;
  text-align: center;
  margin-bottom: 2.5rem;
`

const GuideTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.4rem;
  color: var(--accent);
  font-style: italic;
  margin-bottom: 1.25rem;
`

const ContentGrid = styled.div<{ $imgSide: 'left' | 'right' }>`
  display: grid;
  grid-template-columns: ${({ $imgSide }) =>
    $imgSide === 'right' ? '1fr 280px' : '280px 1fr'};
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const TextCol = styled.div<{ $imgSide: 'left' | 'right' }>`
  order: ${({ $imgSide }) => ($imgSide === 'right' ? 1 : 2)};
  @media (max-width: 600px) { order: 2; }
`

const ImgCol = styled.div<{ $imgSide: 'left' | 'right' }>`
  order: ${({ $imgSide }) => ($imgSide === 'right' ? 2 : 1)};
  @media (max-width: 600px) { order: 1; }
`

const ImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  position: relative;
`

const BuildsLabel = styled.div`
  font-family: var(--font-title);
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 1rem 0 0.5rem;
`

const SynergyBox = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 4px;
  padding: 0.85rem 1rem;
  margin-top: 1rem;
  font-size: 0.88rem;
  color: var(--text-muted);
  font-style: italic;
  line-height: 1.7;
`

const SynergyLabel = styled.span`
  font-family: var(--font-title);
  font-size: 0.7rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 0.35rem;
  font-style: normal;
`

export default function GuidePage() {
  const [activeId, setActiveId] = useState(guides[0].id)
  const guide = guides.find(g => g.id === activeId)!

  return (
    <PageWrapper>
      <PageTitle>Guide 3.5 Anniversary</PageTitle>

      {/* Tab Bar */}
      <TabBar>
        {guides.map(g => (
          <Tab
            key={g.id}
            $active={g.id === activeId}
            onClick={() => setActiveId(g.id)}
          >
            {g.title}
          </Tab>
        ))}
      </TabBar>

      {/* Nội dung nhân vật đang chọn */}
      <GuideTitle>{guide.title}</GuideTitle>

      <ContentGrid $imgSide={guide.imgSide}>
        <TextCol $imgSide={guide.imgSide}>
          {guide.content.map((para, i) => (
            <Paragraph
              key={i}
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                marginBottom: '0.75rem',
              }}
            >
              {para}
            </Paragraph>
          ))}

          <BuildsLabel>Max builds:</BuildsLabel>
          <ul style={{ paddingLeft: '1rem', margin: '0 0 0.5rem' }}>
            {guide.builds.map((build, i) => (
              <li
                key={i}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                  marginBottom: '0.4rem',
                  listStyleType: 'none',
                  paddingLeft: '0.5rem',
                }}
              >
                <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>•</span>
                {build}
              </li>
            ))}
          </ul>

          <SynergyBox>
            <SynergyLabel>Synergies</SynergyLabel>
            {guide.synergies}
          </SynergyBox>
        </TextCol>

        <ImgCol $imgSide={guide.imgSide}>
          <ImgWrapper>
            <Image
              src={guide.img}
              alt={guide.title}
              fill
              sizes="280px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </ImgWrapper>
        </ImgCol>
      </ContentGrid>
    </PageWrapper>
  )
}