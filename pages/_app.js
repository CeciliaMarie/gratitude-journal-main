import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from "styled-components"
import { supabase } from '../lib/supabase'
import { Auth } from '@supabase/ui'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
  body {
    --parchment: #DCCEB9;
    --burnt: #9A4D21;
    --rose: #D8A99D;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: var(--burnt);
    color: var(--parchment);
    position: relative;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-image: url("data:image/jpeg;base64,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");
  mix-blend-mode: multiply;
  pointer-events: none;
`

export default function App({ Component, pageProps }) {
  console.log(supabase)
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Overlay />
    </Auth.UserContextProvider>
  )
}