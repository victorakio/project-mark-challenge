import Link from 'next/link';
import * as S from './styles';
import Image from 'next/image';
import { Typography } from '@components/Typography';
import { useSelectedOption } from '@hooks/useSelectedOption';

export const Header = () => {
  const { selectedOption } = useSelectedOption();

  return (
    <S.HeaderWrapper>
      <Link href="/">
        <Image
          src="/images/logo/logo.svg"
          width={37}
          height={37}
          alt="Project Mark logo"
        />
      </Link>

      <S.OptionsWrapper>
        <S.OptionWrapper>
          <S.Option $state="active">
            <Typography size={1.7} color="white">
              1
            </Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Sales Pipeline Settings
          </Typography>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.Option $state="default">
            <Typography size={1.7} color="dark_blue__800">
              2
            </Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Opportunity Details Settings
          </Typography>
        </S.OptionWrapper>
      </S.OptionsWrapper>

      <S.Button disabled={!selectedOption}>
        <Typography color="white" fontWeight="700">
          Next
        </Typography>
      </S.Button>
    </S.HeaderWrapper>
  );
};
