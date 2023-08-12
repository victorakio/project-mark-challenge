import { colors } from '@stlyes/colors';
import styled, { css } from 'styled-components';
import { ColumnVariants } from '.';

export const TitleArea = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ToggleSwitchWrapper = styled.div``;

export const Toggle = styled.label`
  display: block;
  width: 11.5rem;
  height: 2.2rem;
  border-radius: 1rem;
  position: relative;
  transition: all 0.5s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 4.2rem;
    height: 2.2rem;
    border-radius: 1rem;
    transition: all 0.5s;
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;

  &:checked + ${Toggle}::after {
    left: calc(100% - 4.1rem);
    transform: translateX(100% - 4.2rem);
    transition: all 0.5s;
  }

  ${Toggle}:active::after {
    width: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 17.5rem;
  border-radius: 1rem;
`;

const columnVariants = {
  lead: () => css`
    background-color: ${colors.purple__100};

    ${TitleArea} > p {
      color: ${colors.purple__800};
    }

    ${Toggle} {
      background-color: ${colors.purple__200};

      &::after {
        background-color: ${colors.purple__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.purple__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.purple__200};
    }
  `,
  progress: () => css`
    background-color: ${colors.orange__100};

    ${TitleArea} > p {
      color: ${colors.orange__800};
    }

    ${Toggle} {
      background-color: ${colors.orange__200};

      &::after {
        background-color: ${colors.orange__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.orange__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.orange__200};
    }
  `,
  submitted: () => css`
    background-color: ${colors.blue__100};

    ${TitleArea} > p {
      color: ${colors.blue__800};
    }

    ${Toggle} {
      background-color: ${colors.blue__200};

      &::after {
        background-color: ${colors.blue__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.blue__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.blue__200};
    }
  `,
  won: () => css`
    background-color: ${colors.green__100};

    ${TitleArea} > p {
      color: ${colors.green__800};
    }

    ${Toggle} {
      background-color: ${colors.green__200};

      &::after {
        background-color: ${colors.green__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.green__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.green__200};
    }
  `,
  lost: () => css`
    background-color: ${colors.pink__100};

    ${TitleArea} > p {
      color: ${colors.pink__800};
    }

    ${Toggle} {
      background-color: ${colors.pink__200};

      &::after {
        background-color: ${colors.pink__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.pink__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.pink__200};
    }
  `,
  closed: () => css`
    background-color: ${colors.light_gray__100};

    ${TitleArea} > p {
      color: ${colors.light_gray__800};
    }

    ${Toggle} {
      background-color: ${colors.light_gray__200};

      &::after {
        background-color: ${colors.light_gray__300};
      }
    }

    ${Input} {
      &:checked + ${Toggle} {
        background-color: ${colors.light_gray__800};
      }
    }

    ${Content} {
      border: 0.1rem solid ${colors.light_gray__200};
    }
  `,
};

interface StatusColumnWrapperProps {
  $variant: keyof typeof ColumnVariants;
}

export const StatusColumnWrapper = styled.div<StatusColumnWrapperProps>`
  ${({ $variant }) => css`
    width: 22rem;
    border-radius: 2rem;
    height: 100%;
    padding: 0.5rem;

    ${columnVariants[$variant]}
  `}
`;
