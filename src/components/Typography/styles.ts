import styled, { css } from 'styled-components';

import { colors } from '@stlyes/colors';

import { TypographyProps } from '.';

export const TypographyWrapper = styled.p<TypographyProps>`
  ${({ color = 'gray__800', size, fontWeight }) => css`
    color: ${colors[color]};
    font-size: ${size}rem;
    font-weight: ${fontWeight};
    font-family: 'Archivo Narrow', sans-serif;
  `}
`;
