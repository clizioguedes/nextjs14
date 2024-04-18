import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { theme } from 'styles/theme/main'

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  // Theme can be toggled by using the following code
  // const { isDarkTheme } = useAppSelector(({ application }) => application)

  return (
    <ThemeProvider theme={theme(false)}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
