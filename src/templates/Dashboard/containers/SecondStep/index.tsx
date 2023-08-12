import { Typography } from '@components/Typography';
import { useGetStatuses } from '@hooks/useGetStatuses';
import { useSelectedOption } from '@hooks/useSelectedOption';

import * as S from './styles';

export const SecondStep = () => {
  const { selectedOption } = useSelectedOption();

  const { statusesData } = useGetStatuses();

  const filteredStatus = statusesData?.filter((status) =>
    status.containingPlans.some((plan) => plan === selectedOption),
  );

  return (
    <>
      <Typography as="h1" size={2.4} fontWeight="700">
        Check below your selected option
      </Typography>

      <S.Text>
        <Typography fontWeight="700" size={2}>
          Chosen option: {selectedOption}
        </Typography>

        <S.List>
          {filteredStatus?.map((status) => (
            <S.ListItem key={status.slug}>
              <Typography size={1.8}>{status.slug}</Typography>
            </S.ListItem>
          ))}
        </S.List>
      </S.Text>
    </>
  );
};
