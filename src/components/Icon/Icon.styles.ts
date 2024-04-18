import { Flex } from 'components/Flex'
import styled, { css } from 'styled-components'

export const colors = {
  inherit: css`
    color: inherit;
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.primary.primary};
  `,
  main: css`
    color: ${({ theme }) => theme.colors.neutral.onSurface};
  `
}

export const sizes = {
  sm: css`
    height: ${({ theme }) => theme.spacings[8]};
    width: ${({ theme }) => theme.spacings[8]};
  `,
  md: css`
    height: ${({ theme }) => theme.spacings[10]};
    width: ${({ theme }) => theme.spacings[10]};
  `,
  lg: css`
    height: ${({ theme }) => theme.spacings[12]};
    width: ${({ theme }) => theme.spacings[12]};
  `,
  xl: css`
    height: ${({ theme }) => theme.spacings[16]};
    width: ${({ theme }) => theme.spacings[16]};
  `,
  xll: css`
    height: ${({ theme }) => theme.spacings[18]};
    width: ${({ theme }) => theme.spacings[18]};
  `,
  xxl: css`
    height: ${({ theme }) => theme.spacings[20]};
    width: ${({ theme }) => theme.spacings[20]};
  `
}

export type IconColors = keyof typeof colors
export type IconSizes = keyof typeof sizes

type WrapperProps = {
  $color?: IconColors
  size?: IconSizes
}

export const Wrapper = styled(Flex)<WrapperProps>`
  ${({ $color = 'inherit', size = 'md' }) => css`
    svg {
      ${sizes[size]}
    }

    ${colors[$color]}
    ${sizes[size]}
  `}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`
