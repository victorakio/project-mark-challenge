import { colors } from '@stlyes/colors';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 4.2rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1.5rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.3rem;
  border: 0.1rem solid ${colors.dark_blue__300};
`;

export const Button = styled.button`
  padding: 1.3rem 2.1rem;
  border: none;
  border-radius: 3.4rem;
  background-color: ${colors.blue__highlight};
`;
