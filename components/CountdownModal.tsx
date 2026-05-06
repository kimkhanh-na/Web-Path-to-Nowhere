'use client'

// bộ đếm ngược thời gian

import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Overlay = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  background: var(--bg-dark);
  border: 2px solid var(--accent2);
  border-radius: 8px;
  padding: 1.5rem;
  width: 92%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
`

const Inner = styled.div`
  background: #0d0a07;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const InfoBox = styled.div`
  border: 1px solid var(--accent2);
  border-radius: 4px;
  padding: 0.75rem 1rem;
`

const InfoLabel = styled.div`
  font-family: var(--font-title);
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
`

const InfoValue = styled.div`
  font-size: 0.88rem;
  color: var(--accent);
  font-style: italic;
`

const CountdownRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: nowrap;
`

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

const TimeNum = styled.div`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--accent);
  min-width: 52px;
  text-align: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.25rem 0.4rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
    min-width: 38px;
    padding: 0.2rem 0.3rem;
  }
`

const TimeLabel = styled.div`
  font-family: var(--font-title);
  font-size: 0.6rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const Separator = styled.div`
  font-family: var(--font-title);
  font-size: 2rem;
  color: var(--accent);
  align-self: center;
  margin-bottom: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.9rem;
  }
`

const CloseBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: var(--accent);
  color: #0d0a07;
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const START_DATE = new Date('2026-05-07T14:00:00+08:00')
const END_DATE   = new Date('2026-06-11T13:59:00+08:00') // ← ngày kết thúc

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [status, setStatus] = useState<'upcoming' | 'ongoing' | 'ended'>('upcoming')

  useEffect(() => {
    const calc = () => {
      const now = Date.now()
      const start = START_DATE.getTime()
      const end = END_DATE.getTime()

      if (now < start) {
        // Chưa bắt đầu → đếm đến start
        setStatus('upcoming')
        const diff = start - now
        setTimeLeft({
          days:    Math.floor(diff / 86400000),
          hours:   Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        })
      } else if (now < end) {
        // Đang diễn ra → đếm đến end
        setStatus('ongoing')
        const diff = end - now
        setTimeLeft({
          days:    Math.floor(diff / 86400000),
          hours:   Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        })
      } else {
        // Đã kết thúc
        setStatus('ended')
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calc()
    const timer = setInterval(calc, 1000)
    return () => clearInterval(timer)
  }, [])

  return { timeLeft, status }
}

const pad = (n: number) => String(n).padStart(2, '0')

type Props = {
  show: boolean
  onClose: () => void
}

export default function CountdownModal({ show, onClose }: Props) {
  const { timeLeft: { days, hours, minutes, seconds }, status } = useCountdown()

  return (
    <Overlay $show={show} onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Inner>
          <Grid>
            <InfoBox>
              <InfoLabel>
                {status === 'upcoming' ? 'Upcoming Event' :
                 status === 'ongoing'  ? 'Event Ongoing' :
                 'Event'}
              </InfoLabel>
              <InfoValue>Silent Snow, Hidden Plum</InfoValue>
            </InfoBox>
            <InfoBox>
              <InfoLabel>
                {status === 'upcoming' ? 'Starts' :
                 status === 'ongoing'  ? 'Ends' :
                 'Ended'}
              </InfoLabel>
              <InfoValue>
                {status === 'upcoming' ? 'May 7, 14:00 (Server Time)'  :
                 status === 'ongoing'  ? 'Jun 11, 13:59 (Server Time)' :
                 'Event has ended'}
              </InfoValue>
            </InfoBox>
          </Grid>

          {status === 'ended' ? (
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              fontFamily: 'var(--font-title)',
              fontSize: '1.2rem',
              color: 'var(--accent)',
            }}>
              This event has ended. See you next time, Chief!
            </div>
          ) : (
            <CountdownRow>
              <TimeBox>
                <TimeNum>{pad(days)}</TimeNum>
                <TimeLabel>Days</TimeLabel>
              </TimeBox>
              <Separator>:</Separator>
              <TimeBox>
                <TimeNum>{pad(hours)}</TimeNum>
                <TimeLabel>Hours</TimeLabel>
              </TimeBox>
              <Separator>:</Separator>
              <TimeBox>
                <TimeNum>{pad(minutes)}</TimeNum>
                <TimeLabel>Min</TimeLabel>
              </TimeBox>
              <Separator>:</Separator>
              <TimeBox>
                <TimeNum>{pad(seconds)}</TimeNum>
                <TimeLabel>Sec</TimeLabel>
              </TimeBox>
            </CountdownRow>
          )}

          <CloseBtn onClick={onClose}>Close</CloseBtn>
        </Inner>
      </Modal>
    </Overlay>
  )
}