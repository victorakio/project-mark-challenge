import { colors } from '@stlyes/colors';
import styled, { css } from 'styled-components';

export const headerHeight = '10rem';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: ${headerHeight};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 4.2rem;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const optionState = {
  active: () => css`
    background-color: ${colors.dark_blue__800};
    border: 0.1rem solid ${colors.dark_blue__800};
  `,
  default: () => css`
    background-color: ${colors.white};
    border: 0.1rem solid ${colors.dark_blue__300};
  `,
};

interface OptionsProps {
  $state: keyof typeof optionState;
}

export const Option = styled.div<OptionsProps>`
  ${({ $state }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.3rem;
    ${optionState[$state]}
  `}
`;

export const Button = styled.button`
  padding: 1.3rem 2.1rem;
  border: none;
  border-radius: 3.4rem;
  background-color: ${colors.blue__highlight};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
