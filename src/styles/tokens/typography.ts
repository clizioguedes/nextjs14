export const typography = {
  family: {
    primary:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  lineHeight: {
    none: 1,
    tight: 1.24,
    snug: 1.32,
    normal: 1.4,
    relaxed: 1.64,
    loose: 2
  },
  sizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem'
  },
  spacing: {
    thinner: '-0.0175rem',
    thin: '0rem',
    normal: '0.02rem',
    wide: '0.03rem',
    wider: '0.15rem'
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    'normal-case': 'none'
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    'semi-bold': 600,
    bold: 700
  }
} as const
