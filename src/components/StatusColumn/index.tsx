import { Typography } from '@components/Typography';

import * as S from './styles';

export enum ColumnVariants {
  lead = 'LEAD',
  progress = 'RFP IN PROGRESS',
  submitted = 'SUBMITTED',
  won = 'WON',
  lost = 'LOST',
  closed = 'CLOSED',
}

interface StatusColumnProps {
  variant: keyof typeof ColumnVariants;
  isChecked: boolean;
}

export const StatusColumn: React.FC<StatusColumnProps> = ({
  variant,
  isChecked,
}) => {
  return (
    <S.StatusColumnWrapper $variant={variant}>
      <S.TitleArea>
        <Typography fontWeight="700">{ColumnVariants[variant]}</Typography>

        <S.ToggleSwitchWrapper>
          <S.Input
            id={`${variant}-switch`}
            name={`${variant}-switch`}
            checked={isChecked}
            readOnly
          />

          <S.Toggle htmlFor={`${variant}-switch`} />
        </S.ToggleSwitchWrapper>
      </S.TitleArea>

      <S.Content />
    </S.StatusColumnWrapper>
  );
};
