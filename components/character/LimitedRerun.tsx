'use client'

import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.35rem;
  color: var(--accent);
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const FeaturedImg = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

const ImgBlock = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  position: relative;
  overflow: hidden;
`

const ImgCaption = styled.div`
  padding: 0.6rem 0.75rem;
  border-top: 1px solid var(--border);
`

const CaptionTitle = styled.div`
  font-family: var(--font-title);
  font-size: 0.78rem;
  color: var(--text-main);
  margin-bottom: 0.15rem;
`

const CaptionDesc = styled.div`
  font-size: 0.78rem;
  color: var(--accent);
  font-style: italic;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SmallCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
`

const SmallImg = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: var(--bg-card2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  position: relative;
  overflow: hidden;
`

const SmallBody = styled.div`
  padding: 0.6rem 0.75rem;
`

export default function LimitedRerun() {
  return (
    <Section>
      <SectionTitle>Sinners Limited Rerun</SectionTitle>
      <Layout>
        <FeaturedImg>
          <ImgBlock>
            {/* <Image src="/image/featured.jpg" alt="Featured" fill style={{ objectFit: 'cover' }} /> */}
            Featured Image
          </ImgBlock>
          <ImgCaption>
            <CaptionTitle>Featured product</CaptionTitle>
            <CaptionDesc>Description of featured product</CaptionDesc>
          </ImgCaption>
        </FeaturedImg>

        <RightCol>
          <SmallCard>
            <SmallImg>
              {/* <Image src="/image/product-1.jpg" alt="Product 1" fill style={{ objectFit: 'cover' }} /> */}
              Image
            </SmallImg>
            <SmallBody>
              <CaptionTitle>Product</CaptionTitle>
              <CaptionDesc>Description of top product</CaptionDesc>
            </SmallBody>
          </SmallCard>
          <SmallCard>
            <SmallImg>
              {/* <Image src="/image/product-2.jpg" alt="Product 2" fill style={{ objectFit: 'cover' }} /> */}
              Image
            </SmallImg>
            <SmallBody>
              <CaptionTitle>Product</CaptionTitle>
              <CaptionDesc>Description of lower product</CaptionDesc>
            </SmallBody>
          </SmallCard>
        </RightCol>
      </Layout>
    </Section>
  )
}