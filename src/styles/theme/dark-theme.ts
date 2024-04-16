import { colors } from 'styles/tokens'

export const darkThemeColors = {
  primary: {
    primary: colors.blue[80],
    onPrimary: colors.blue[20],
    primaryContainer: colors.blue[30],
    onPrimaryContainer: colors.blue[90]
  },

  secondary: {
    secundary: colors.green[80],
    onSecundary: colors.green[20],
    secundaryContainer: colors.green[30],
    onSecundaryContainer: colors.green[90]
  },

  error: {
    error: colors.red[80],
    onError: colors.red[20],
    errorContainer: colors.red[30],
    onErrorContainer: colors.red[90]
  },

  warning: {
    warning: colors.orange[80],
    onWarnig: colors.orange[20],
    warnigContainer: colors.orange[30],
    onWarnigContainer: colors.orange[90]
  },

  success: {
    success: colors.lightGreen[80],
    onSuccess: colors.lightGreen[20],
    successContainer: colors.lightGreen[30],
    onSuccessContainer: colors.lightGreen[90]
  },

  neutral: {
    surfaceDim: colors.neutral[6],
    surface: colors.neutral[6],
    surfacebright: colors.neutral[24],
    surfaceContainerLowest: colors.neutral[4],
    surfaceContainerLow: colors.neutral[10],
    surfaceContainer: colors.neutral[12],
    surfaceContainerHigh: colors.neutral[17],
    surfaceContainerHigher: colors.neutral[22],
    onSurfaceLow: colors.neutral[90],
    onSurface: colors.neutral[80],
    onSurfaceHigh: colors.neutral[70],
    outline: colors.neutral[60],
    outlineVariant: colors.neutral[30],
    inverseSurface: colors.neutral[90],
    inverseOnSurface: colors.neutral[20],
    inversePrimary: colors.neutral[40]
  }
}
