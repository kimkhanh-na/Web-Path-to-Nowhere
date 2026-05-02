'use client'

import styled from 'styled-components'
import { Typography, Divider } from 'antd'
import Image from 'next/image'
import { guides } from '@/data/guides'

const { Title, Paragraph, Text } = Typography

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

const GuideBlock = styled.div`
  margin-bottom: 3.5rem;
`

const GuideTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.4rem;
  color: var(--accent);
  font-style: italic;
  margin-bottom: 1.25rem;
`

/* ── $ là convention của Styled Components 
để đánh dấu transient props 
(props chỉ dùng cho styling, không truyền xuống DOM). ── */
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
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
  return (
    <PageWrapper>
      <PageTitle>Guide xtreme reforge</PageTitle>

      {guides.map((guide, index) => (
        <GuideBlock key={guide.id}>
          <GuideTitle>{guide.title}</GuideTitle>

          <ContentGrid $imgSide={guide.imgSide}>
            <TextCol $imgSide={guide.imgSide}>
              {/* Paragraphs */}
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

              {/* Builds */}
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

              {/* Synergies */}
              <SynergyBox>
                <SynergyLabel>Synergies</SynergyLabel>
                {guide.synergies}
              </SynergyBox>
            </TextCol>

            <ImgCol $imgSide={guide.imgSide}>
              <ImgWrapper>
                
                  <Image src={guide.img} 
                      alt={guide.title} 
                      fill
                      sizes="280px" 
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                   />
                
              </ImgWrapper>
            </ImgCol>
          </ContentGrid>

          {index < guides.length - 1 && (
            <Divider style={{ borderColor: 'var(--border)', marginTop: '2.5rem' }} />
          )}
        </GuideBlock>
      ))}
    </PageWrapper>
  )
}