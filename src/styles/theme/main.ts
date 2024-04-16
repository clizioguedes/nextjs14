import {
  breakpoints,
  effects,
  layers,
  spacings,
  transitions,
  typography
} from 'styles/tokens'
import { darkThemeColors } from './dark-theme'
import { lightThemeColors } from './light-theme'

export const theme = (isDark?: boolean) => ({
  title: 'main',
  colors: isDark ? darkThemeColors : lightThemeColors,
  breakpoints,
  effects,
  layers,
  spacings,
  typography,
  transitions
})
