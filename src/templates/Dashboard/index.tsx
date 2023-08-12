import { Header } from '@components/Header';
import * as S from './styles';
import { useGetOptions } from '@hooks/useGetOptions';
import { useGetStatuses } from '@hooks/useGetStatuses';
import { Loader } from '@components/Loader';
import { FirstStep } from './containers/FirstStep';
import { Steps, useSelectedOption } from '@hooks/useSelectedOption';
import { SecondStep } from './containers/SecondStep';

export const Dashboard = () => {
  const { currentStep } = useSelectedOption();

  const { isOptionsLoading } = useGetOptions();

  const { isStatusesLoading } = useGetStatuses();

  if (isOptionsLoading || isStatusesLoading) return <Loader />;

  return (
    <S.OuterWrapper>
      <Header />

      <S.InnerWrapper>
        {currentStep === Steps.sales_pipeline && <FirstStep />}

        {currentStep === Steps.opportunity_details && <SecondStep />}
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
