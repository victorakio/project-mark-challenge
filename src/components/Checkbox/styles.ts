import { colors } from '@stlyes/colors';
import styled, { css } from 'styled-components';

interface CheckboxWrapperProps {
  $isActive: boolean;
}

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  ${({ $isActive }) => css`
    display: flex;
    width: 21rem;
    align-items: center;
    padding: 1rem;
    border: 0.1rem solid ${colors.gray__300};
    border-radius: 1rem;
    position: relative;

    &:hover {
      background-color: ${colors.gray__200};
    }

    &:not(last-child) {
      margin-right: 1rem;
    }

    ${$isActive &&
    css`
      border: 0.2rem solid ${colors.blue__highlight};

      &:hover {
        background-color: ${colors.white};
      }

      &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        position: absolute;
        bottom: -0.73rem;
        border-top: 0.2rem solid ${colors.blue__highlight};
        border-left: 0.2rem solid ${colors.blue__highlight};
        background-color: white;
        left: 50%;
        transform: translateX(-50%) rotate(225deg);
        border-radius: 0.1rem;
      }
    `}
  `}
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  background-color: ${colors.white};
  margin: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 0.2rem solid ${colors.gray__400};
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray__300};
  }

  &::before {
    content: url('/images/assets/check-mark.svg');
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    transform-origin: bottom left;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:checked {
    background-color: ${colors.blue__highlight};
    border-color: ${colors.blue__highlight};
  }
`;
