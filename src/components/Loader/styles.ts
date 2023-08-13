import styled from 'styled-components';

import { colors } from '@stlyes/colors';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 1rem solid ${colors.light_gray__100};
  border-top: 1rem solid ${colors.blue__highlight};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
