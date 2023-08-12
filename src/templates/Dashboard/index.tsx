import { Header } from '@components/Header';
import * as S from './styles';
import { Typography } from '@components/Typography';
import { Checkbox } from '@components/Checkbox';
import { ColumnVariants, StatusColumn } from '@components/StatusColumn';
import { useSelectedOption } from '@hooks/useSelectedOption';

export const Dashboard = () => {
  const { selectedOption, handleSelectedOption, optionsData, statusesData } =
    useSelectedOption();

  return (
    <S.OuterWrapper>
      <Header />

      <S.InnerWrapper>
        <Typography as="h1" size={2.4} fontWeight="700">
          Please select the type of sales pipeline that best fits to your
          company
        </Typography>

        <S.CheckboxWrapper>
          {optionsData?.map((option) => (
            <Checkbox
              key={option.slug}
              checked={selectedOption === option.slug}
              id={option.slug}
              label={option.name}
              onChange={() => handleSelectedOption(option.slug)}
            />
          ))}
        </S.CheckboxWrapper>

        <S.ColumnsWrapper>
          {statusesData?.map((status) => (
            <StatusColumn
              key={status.slug}
              variant={status.slug as keyof typeof ColumnVariants}
              isChecked={status.containingPlans.includes(selectedOption)}
            />
          ))}
        </S.ColumnsWrapper>

        <S.FadeArea />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
