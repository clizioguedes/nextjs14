/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from 'styles/theme/main'

type Theme = ReturnType<typeof theme>

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
