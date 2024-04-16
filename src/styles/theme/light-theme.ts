import { colors } from 'styles/tokens'

export const lightThemeColors = {
  primary: {
    primary: colors.blue[40],
    onPrimary: colors.blue[100],
    primaryContainer: colors.blue[90],
    onPrimaryContainer: colors.blue[10]
  },

  secondary: {
    secundary: colors.green[40],
    onSecundary: colors.green[100],
    secundaryContainer: colors.green[90],
    onSecundaryContainer: colors.green[10]
  },

  error: {
    error: colors.red[40],
    onError: colors.red[100],
    errorContainer: colors.red[90],
    onErrorContainer: colors.red[10]
  },

  warning: {
    warning: colors.orange[40],
    onWarnig: colors.orange[100],
    warnigContainer: colors.orange[90],
    onWarnigContainer: colors.orange[10]
  },

  success: {
    success: colors.lightGreen[40],
    onSuccess: colors.lightGreen[100],
    successContainer: colors.lightGreen[90],
    onSuccessContainer: colors.lightGreen[10]
  },

  neutral: {
    surfaceDim: colors.neutral[85],
    surface: colors.neutral[98],
    surfacebright: colors.neutral[98],
    surfaceContainerLowest: colors.neutral[85],
    surfaceContainerLow: colors.neutral[90],
    surfaceContainer: colors.neutral[94],
    surfaceContainerHigh: colors.neutral[96],
    surfaceContainerHigher: colors.neutral[100],
    onSurfaceLow: colors.neutral[10],
    onSurface: colors.neutral[20],
    onSurfaceHigh: colors.neutral[30],
    outline: colors.neutral[50],
    outlineVariant: colors.neutral[80],
    inverseSurface: colors.neutral[20],
    inverseOnSurface: colors.neutral[94],
    inversePrimary: colors.neutral[80]
  }
}
