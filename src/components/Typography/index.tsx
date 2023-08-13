import { colors } from '@stlyes/colors';

import * as S from './styles';

export interface TypographyProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: number;
  color?: keyof typeof colors;
  fontWeight?: '400' | '700';
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  as = 'p',
  color = 'gray__800',
  size = 1.4,
  fontWeight = '400',
  children,
}) => {
  return (
    <S.TypographyWrapper
      as={as}
      color={color}
      size={size}
      fontWeight={fontWeight}
    >
      {children}
    </S.TypographyWrapper>
  );
};
