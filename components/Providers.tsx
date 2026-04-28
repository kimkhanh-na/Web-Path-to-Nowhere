'use client'

import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  )
}