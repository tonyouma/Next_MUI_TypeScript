import * as React from 'react'

import type { AppProps } from 'next/app'
import createEmotionCache from '../utility/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import '../styles/globals.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp;