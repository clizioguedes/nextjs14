'use client'

import { useState } from 'react'

import emotionIsPropValid from '@emotion/is-prop-valid'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  const isServer = typeof window === 'undefined'

  return (
    <StyleSheetManager
      shouldForwardProp={(propName) => emotionIsPropValid(propName)}
      sheet={isServer ? styledComponentsStyleSheet.instance : undefined}
    >
      {children}
    </StyleSheetManager>
  )
}
