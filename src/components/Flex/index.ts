'use client'

import styled, { css } from 'styled-components'
import { theme } from 'styles/theme/main'

const globalTheme = theme()

export type Spacings = keyof typeof globalTheme.spacings

export type Align = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'

export type AlignContent =
  | 'around'
  | 'between'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'

export type Justify =
  | 'space-around'
  | 'space-between'
  | 'center'
  | 'flex-end'
  | 'space-evenly'
  | 'flex-start'

export type Wrap = 'wrap' | 'wrap-reverse'

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto'

export type Fill = 'horizontal' | 'vertical' | 'both'

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

const alignStyle = css<{ align?: Align }>`
  align-items: ${({ align }) => align};
`

const alignContentStyle = css<{ alignContent?: AlignContent }>`
  align-content: ${({ alignContent }) => alignContent};
`

const justifyStyle = css<{ justify?: Justify }>`
  justify-content: ${({ justify }) => justify};
`

const wrapStyle = css<{ wrap?: Wrap }>`
  flex-wrap: ${({ wrap }) => wrap};
`

const overflowStyle = css<{ overflow?: Overflow }>`
  overflow: ${({ overflow }) => overflow};
`

const fillStyle = (fill: Fill) => {
  if (fill === 'horizontal') {
    return 'width: 100%;'
  }
  if (fill === 'vertical') {
    return 'height: 100%;'
  }
  if (fill === 'both') {
    return `
      width: 100%;
      height: 100%;
    `
  }
  return undefined
}

const directionStyle = css<{ direction?: Direction }>`
  flex-direction: ${({ direction }) => direction};
`

export interface FixedSize {
  horizontal?: string | number
  vertical?: string | number
}

const fixedSizeStyle = css<{ fixedSize?: FixedSize }>`
  ${({ fixedSize }) =>
    fixedSize &&
    css`
      ${fixedSize.horizontal &&
      css`
        width: ${typeof fixedSize.horizontal === 'string'
          ? fixedSize.horizontal
          : fixedSize.horizontal + 'px'};
      `}
      ${fixedSize.vertical &&
      css`
        height: ${typeof fixedSize.vertical === 'string'
          ? fixedSize.vertical
          : fixedSize.vertical + 'px'};
      `};
    `}
`

interface Spaces {
  all?: Spacings
  horizontal?: Spacings
  vertical?: Spacings
  top?: Spacings
  right?: Spacings
  left?: Spacings
  bottom?: Spacings
}

const spaceStyle = (space: Spaces, type: 'margin' | 'padding') => {
  const styles = []
  if (space.vertical) {
    styles[1] = `${type}-top: ${globalTheme.spacings[space.vertical]};`
    styles[3] = `${type}-bottom: ${globalTheme.spacings[space.vertical]};`
  }
  if (space.horizontal) {
    styles[2] = `${type}-right: ${globalTheme.spacings[space.horizontal]};`
    styles[4] = `${type}-left: ${globalTheme.spacings[space.horizontal]};`
  }
  if (space.top) {
    styles[1] = `${type}-top: ${globalTheme.spacings[space.top]};`
  }
  if (space.right) {
    styles[2] = `${type}-right: ${globalTheme.spacings[space.right]};`
  }
  if (space.bottom) {
    styles[3] = `${type}-bottom: ${globalTheme.spacings[space.bottom]};`
  }
  if (space.left) {
    styles[4] = `${type}-left: ${globalTheme.spacings[space.left]};`
  }
  if (space.all) {
    styles[0] = `${type}: ${globalTheme.spacings[space.all]};`
  }
  return css`
    ${styles.map((style) => style).join('')}
  `
}

export interface FlexProps {
  align?: Align
  alignContent?: AlignContent
  fill?: Fill
  justify?: Justify
  wrap?: Wrap
  direction?: Direction
  inline?: boolean
  flex?: boolean
  gap?: Spacings
  margin?: Spaces
  padding?: Spaces
  overflow?: Overflow
  fixedSize?: FixedSize
  noShrink?: boolean
}

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ theme, gap }) =>
    gap &&
    css`
      gap: ${theme.spacings[gap]};
    `}

  ${(props) =>
    props.inline &&
    css`
      display: inline-flex;
    `}

  ${(props) =>
    props.flex &&
    css`
      flex: 1;
    `};

  ${({ noShrink }) =>
    noShrink &&
    css`
      flex-shrink: 0;
    `}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  ${({ align }) => align && alignStyle}
  ${({ alignContent }) => alignContent && alignContentStyle}
  ${({ fill }) => fill && fillStyle(fill)}
  ${({ justify }) => justify && justifyStyle}
  ${({ wrap }) => wrap && wrapStyle}
  ${({ overflow }) => overflow && overflowStyle}
  ${({ direction }) => direction && directionStyle}
  ${({ margin }) => margin && spaceStyle(margin, 'margin')}
  ${({ padding }) => padding && spaceStyle(padding, 'padding')}
  ${({ fixedSize }) => fixedSize && fixedSizeStyle}
`
