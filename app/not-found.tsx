'use client'

import styled from 'styled-components'
import { useRouter } from 'next/navigation'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
`

const Card = styled.div`
  background: #0d0a07;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3rem 2.5rem;
  text-align: center;
  min-width: 320px;
`

const Title = styled.h1`
  font-family: var(--font-title);
  font-size: 1.5rem;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`

const Btn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-title);
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 2px solid var(--accent2);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--accent2);
    color: var(--text-main);
  }
`

export default function NotFound() {
  const router = useRouter()

  return (
    <Wrapper>
      <Card>
        <Title>404 Error (Not Found)</Title>
        <Btn onClick={() => router.push('/')}>
          Return Home
        </Btn>
      </Card>
    </Wrapper>
  )
}