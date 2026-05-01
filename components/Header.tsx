'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 10, 7, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 60px;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`

const Logo = styled(Link)`
  font-family: var(--font-title);
  font-size: 1.1rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-decoration: none;
`

const NavList = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 0.25rem;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(13, 10, 7, 0.98);
    border-bottom: 1px solid var(--border);
    padding: 1rem 1.25rem;
    gap: 0.25rem;
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-title);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#0d0a07' : 'var(--text-muted)')};
  background: ${({ $active }) => ($active ? 'var(--accent)' : 'transparent')};
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  padding: 0.4rem 0.85rem;
  border-radius: 3px;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
  display: block;

  &:hover {
    color: ${({ $active }) => ($active ? '#0d0a07' : 'var(--text-main)')};
  }
`

const HamburgerBtn = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Bar = styled.span<{ $open: boolean; $index: number }>`
  display: block;
  width: 22px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;

  ${({ $open, $index }) =>
    $open &&
    $index === 0 &&
    'transform: translateY(7px) rotate(45deg);'}

  ${({ $open, $index }) =>
    $open &&
    $index === 1 &&
    'opacity: 0;'}

  ${({ $open, $index }) =>
    $open &&
    $index === 2 &&
    'transform: translateY(-7px) rotate(-45deg);'}
`

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Event', href: '/event' },
  { label: 'Character', href: '/character' },
  { label: 'Attires', href: '/attires' },
  { label: 'Guide', href: '/guide' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Logo href="/">Path To Nowhere</Logo>

      <HamburgerBtn onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <Bar $open={open} $index={0} />
        <Bar $open={open} $index={1} />
        <Bar $open={open} $index={2} />
      </HamburgerBtn>

      <NavList $open={open}>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              $active={pathname === item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  )
}