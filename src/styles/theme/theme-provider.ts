'use client'

import { createTheming } from '@callstack/react-theme-provider'
import { theme } from './main'

export const { ThemeProvider, withTheme, useTheme } = createTheming(theme())
