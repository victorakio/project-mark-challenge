import { colors } from '@stlyes/colors';
import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 0.1rem solid ${colors.gray__300};
  border-radius: 1rem;

  &:hover {
    background-color: ${colors.gray__200};
  }

  &:not(last-child) {
    margin-right: 1rem;
  }
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
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }

  &:checked::before {
    transform: scale(1);
  }
`;
