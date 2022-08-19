import { ThemeProvider } from '@emotion/react'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { useEffect } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { darkTheme, wsInstance } from '../components/atom'
import { dark_theme, light_theme } from '../components/MUI_Theme'
import '../styles/globals.css'


function RecoilWraper({ children }) {
  const dark = useRecoilValue(darkTheme)
  const ws = useRecoilValue(wsInstance)
  useEffect(() => {
    ws.onmessage = (event) => {
      console.log(event.data)
    }
  });

  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={dark ? dark_theme : light_theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
}

function MyApp({ Component, pageProps }) {

  return <RecoilRoot>
    <RecoilWraper>
      <Component {...pageProps} />
    </RecoilWraper>
  </RecoilRoot>
}

export default MyApp
