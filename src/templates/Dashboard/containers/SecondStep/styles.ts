import styled from 'styled-components';

import { colors } from '@stlyes/colors';

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  border: 0.4rem solid ${colors.dark_blue__300};
  border-radius: 1rem;
  padding: 4rem;
  width: 50rem;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '●';
    position: absolute;
    margin-left: -1rem;
  }
`;
