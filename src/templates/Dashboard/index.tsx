import { useGetOptions } from '@hooks/useGetOptions';
import { useGetStatuses } from '@hooks/useGetStatuses';
import { Steps, useSelectedOption } from '@hooks/useSelectedOption';

import { Header } from '@components/Header';
import { Loader } from '@components/Loader';

import { FirstStep } from './containers/FirstStep';
import { SecondStep } from './containers/SecondStep';

import * as S from './styles';

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
