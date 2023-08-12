import { headerHeight } from '@components/Header/styles';
import { colors } from '@stlyes/colors';
import { styled } from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray__200};
  padding: 1rem;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const InnerWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 2rem;
  height: calc(100% - ${headerHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem 0;
  position: relative;

  @media (min-width: 1024px) {
    padding: 5rem 0 0 0;
  }
`;

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4.2rem;
  margin-bottom: 7rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

export const ColumnsWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 22rem));
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, minmax(auto, 22rem));
    grid-template-rows: unset;
    padding: 0 2rem;
  }
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
