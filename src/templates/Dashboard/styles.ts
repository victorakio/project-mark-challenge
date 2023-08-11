import { colors } from '@stlyes/colors';
import { styled } from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray__200};
  padding: 1rem;
`;

export const InnerWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 2rem;
  height: calc(100% - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  position: relative;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 4.2rem;
  margin-bottom: 7rem;
`;

export const ColumnsWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 1.4rem;
`;

export const FadeArea = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${colors.white} 100%
  );
  height: 20rem;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 2rem 2rem;
`;
