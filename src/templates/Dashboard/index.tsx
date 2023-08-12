import { Header } from '@components/Header';
import * as S from './styles';
import { Typography } from '@components/Typography';
import { Checkbox } from '@components/Checkbox';
import { StatusColumn } from '@components/StatusColumn';
import { useSelectedOption } from '@hooks/useSelectedOption';

export const Dashboard = () => {
  const { selectedOption, handleSelectedOption } = useSelectedOption();

  const plansWithLead = ['basic', 'advanced', 'expert', 'custom'];

  const plansWithProgress = ['basic', 'advanced', 'expert', 'custom'];

  const plansWithSubmitted = ['advanced', 'expert', 'custom'];

  const plansWithWon = ['expert', 'custom'];

  const plansWithLost = ['custom'];

  const plansWithClosed = ['custom'];

  return (
    <S.OuterWrapper>
      <Header />

      <S.InnerWrapper>
        <Typography as="h1" size={2.4} fontWeight="700">
          Please select the type of sales pipeline that best fits to your
          company
        </Typography>

        <S.CheckboxWrapper>
          <Checkbox
            checked={selectedOption === 'basic'}
            id="basic"
            label="Basic"
            onChange={() => handleSelectedOption('basic')}
          />

          <Checkbox
            checked={selectedOption === 'advanced'}
            id="advanced"
            label="Advanced"
            onChange={() => handleSelectedOption('advanced')}
          />

          <Checkbox
            checked={selectedOption === 'expert'}
            id="expert"
            label="Expert"
            onChange={() => handleSelectedOption('expert')}
          />

          <Checkbox
            checked={selectedOption === 'custom'}
            id="custom"
            label="Custom"
            onChange={() => handleSelectedOption('custom')}
          />
        </S.CheckboxWrapper>

        <S.ColumnsWrapper>
          <StatusColumn
            variant="lead"
            id="lead"
            isChecked={plansWithLead.includes(selectedOption)}
          />

          <StatusColumn
            variant="progress"
            id="progress"
            isChecked={plansWithProgress.includes(selectedOption)}
          />

          <StatusColumn
            variant="submitted"
            id="submitted"
            isChecked={plansWithSubmitted.includes(selectedOption)}
          />

          <StatusColumn
            variant="won"
            id="won"
            isChecked={plansWithWon.includes(selectedOption)}
          />

          <StatusColumn
            variant="lost"
            id="lost"
            isChecked={plansWithLost.includes(selectedOption)}
          />

          <StatusColumn
            variant="closed"
            id="closed"
            isChecked={plansWithClosed.includes(selectedOption)}
          />
        </S.ColumnsWrapper>

        <S.FadeArea />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
