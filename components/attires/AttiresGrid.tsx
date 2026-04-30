'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { endpoints } from '@/data/api'


const Section = styled.section`
  margin-bottom: 3.5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.35rem;
  color: var(--accent);
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  @media (max-width: 600px) { grid-template-columns: 1fr 1fr; }
`

const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`

const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 16/11;
  background: var(--bg-card2);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
`

const CardBody = styled.div`
  padding: 0.75rem;
`

const CardTitle = styled.div`
  font-family: var(--font-title);
  font-size: 0.88rem;
  color: var(--text-main);
  margin-bottom: 0.2rem;
`

const CardDesc = styled.div`
  font-size: 0.82rem;
  color: var(--text-muted);
  font-style: italic;
  margin-bottom: 0.35rem;
`

const CardPrice = styled.div`
  font-family: var(--font-title);
  font-size: 0.82rem;
  color: var(--accent);
`

const Loading = styled.div`
  color: var(--text-muted);
  padding: 2rem 0;
  font-style: italic;
  text-align: center;
`

type Attire = {
  id: string
  title: string
  desc: string
  price: string
  image: string
}

export default function AttiresGrid() {
  const [attires, setAttires] = useState<Attire[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(endpoints.attires)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => {
        setAttires(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading>Loading attires...</Loading>
  if (error)   return <Loading>Failed to load data.</Loading>

  return (
    <Section>
      <SectionTitle>New limited-edition skins are dropping soon</SectionTitle>
      <Grid>
        {attires.map((item) => (
          <Card key={item.id}>
            <CardImg>
              {/* Khi có ảnh thật:
                <Image src={item.image} alt={item.title} fill
                  sizes="(max-width:600px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }} />
              */}
              Image
            </CardImg>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.desc}</CardDesc>
              <CardPrice>{item.price}</CardPrice>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}