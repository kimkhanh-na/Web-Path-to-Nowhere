'use client'

import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 3.5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 1.35rem;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const CodeCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CodeName = styled.div`
  font-family: var(--font-title);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--text-main);
  word-break: break-all;
  margin-bottom: 0.25rem;
`

const CodeValid = styled.div`
  font-size: 0.78rem;
  color: var(--text-muted);
  font-style: italic;
`

const codes = [
  { name: 'EASTIAYEAROFHORSE' },
  { name: 'EASTIAINMYHEART' },
  { name: 'CODEXVICTOR' },
]

export default function CodesSection() {
  return (
    <Section>
      <SectionTitle>Unveiling the Secrets of Eastia</SectionTitle>
      <Grid>
        {codes.map((c) => (
          <CodeCard key={c.name}>
            <Avatar>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--text-muted)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </Avatar>
            <div>
              <CodeName>{c.name}</CodeName>
              <CodeValid>Valid until May 25, 2026, 15:59 (UTC+0)</CodeValid>
            </div>
          </CodeCard>
        ))}
      </Grid>
    </Section>
  )
}