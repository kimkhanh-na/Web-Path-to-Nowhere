'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
`

const Logo = styled(Link)`
  font-family: var(--font-title);
  font-size: 1.1rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  gap: 0.25rem;
  list-style: none;
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

  &:hover {
    color: ${({ $active }) => ($active ? '#0d0a07' : 'var(--text-main)')};
  }
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
  return (
    <Nav>
      <Logo href="/">LeKimKhanh</Logo>
      <NavList>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} $active={pathname === item.href}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  )
}