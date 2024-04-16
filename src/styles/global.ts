import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      border-width: 0;
      border-style: solid;
      box-sizing: inherit;
    }

  }

  a {
    color: inherit;
    text-decoration: none;
  }
 
  ${({ theme }) => css`
    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
      font-family: var(--font-inter);
      height: 100vh;
    }

    body {
      color: ${theme.colors.neutral.onSurface};
      font-family: ${theme.typography.family.primary};
      font-size: ${theme.typography.sizes.md};
      background-color: ${theme.colors.neutral.surface};
    }
  `}

`

export default GlobalStyles
