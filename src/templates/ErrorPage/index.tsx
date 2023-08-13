import Link from 'next/link';

import { Typography } from '@components/Typography';

import * as S from './styles';

export const ErrorPageTemplate = () => {
  return (
    <S.ErrorWrapper>
      <Typography as="h1" size={3} fontWeight="700">
        Sorry for the inconvenience but an error occurred, please try again
      </Typography>

      <Link href="/">
        <Typography>Return to Homepage</Typography>
      </Link>
    </S.ErrorWrapper>
  );
};
