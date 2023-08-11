import { Header } from '@components/Header';
import * as S from './styles';
import { Typography } from '@components/Typography';
import { Checkbox } from '@components/Checkbox';
import { StatusColumn } from '@components/StatusColumn';

export const Dashboard = () => {
  return (
    <S.OuterWrapper>
      <Header />

      <S.InnerWrapper>
        <Typography as="h1" size={2.4} fontWeight="700">
          Please select the type of sales pipeline that best fits to your
          company
        </Typography>

        <S.CheckboxWrapper>
          <Checkbox />

          <Checkbox />

          <Checkbox />

          <Checkbox />
        </S.CheckboxWrapper>

        <S.ColumnsWrapper>
          <StatusColumn />

          <StatusColumn />

          <StatusColumn />

          <StatusColumn />

          <StatusColumn />

          <StatusColumn />
        </S.ColumnsWrapper>

        <S.FadeArea />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
