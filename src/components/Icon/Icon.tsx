import * as A from 'components/Icons'
import * as S from './Icon.styles'

export const icons = {
  add: <A.AddIcon />
}

export type IconsType = keyof typeof icons

export type IconProps = {
  as: IconsType
  color?: S.IconColors
  size?: S.IconSizes
  onClick?: () => void
  testId?: string
}

export const Icon = ({
  as: icon,
  color = 'inherit',
  size,
  onClick,
  testId
}: IconProps) => (
  <S.Wrapper data-testid={testId} onClick={onClick} $color={color} size={size}>
    {icons[icon]}
  </S.Wrapper>
)
