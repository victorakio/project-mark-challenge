import { Header } from '@components/Header';
import * as S from './styles';
import { useGetOptions } from '@hooks/useGetOptions';
import { useGetStatuses } from '@hooks/useGetStatuses';
import { Loader } from '@components/Loader';
import { FirstStep } from './containers/FirstStep';

export const Dashboard = () => {
  const { isOptionsLoading } = useGetOptions();

  const { isStatusesLoading } = useGetStatuses();

  if (isOptionsLoading || isStatusesLoading) return <Loader />;

  return (
    <S.OuterWrapper>
      <Header />

      <S.InnerWrapper>
        <FirstStep />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
