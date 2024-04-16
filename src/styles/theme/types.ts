import { theme } from './main'

const globalTheme = theme()

export type Spacings = keyof typeof globalTheme.spacings
