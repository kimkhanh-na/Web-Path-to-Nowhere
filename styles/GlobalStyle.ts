'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg-dark:    #0d0a07;
    --bg-card:    #1a1208;
    --bg-card2:   #120e06;
    --accent:     #e8b84b;
    --accent2:    #c0392b;
    --text-main:  #f0e8d4;
    --text-muted: #8c7a5e;
    --border:     #2e2010;
    --font-title: 'Cinzel', serif;
    --font-body:  'Crimson Pro', serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-body);
    font-size: 17px;
    line-height: 1.7;
    min-height: 100vh;
  }

  a { text-decoration: none; }
`

export default GlobalStyle