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
  id: string;
  variant: keyof typeof ColumnVariants;
}

export const StatusColumn: React.FC<StatusColumnProps> = ({ id, variant }) => {
  return (
    <S.StatusColumnWrapper variant={variant} key={id}>
      <S.TitleArea>
        <Typography fontWeight="700">{ColumnVariants[variant]}</Typography>

        <S.ToggleSwitchWrapper>
          <S.Input id="switch" name="switch" />

          <S.Toggle htmlFor="switch" />
        </S.ToggleSwitchWrapper>
      </S.TitleArea>

      <S.Content />
    </S.StatusColumnWrapper>
  );
};
