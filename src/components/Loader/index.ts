'use client'

import styled, { css } from 'styled-components'

export const Loader = styled.div<{ width?: number }>`
  ${({ theme, width = 32 }) => css`
    border: ${width * 0.13}px solid ${theme.colors.neutral.outlineVariant};
    border-top: ${width * 0.13}px solid ${theme.colors.primary.primary};
    border-radius: 50%;
    width: ${width}px;
    height: ${width}px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
