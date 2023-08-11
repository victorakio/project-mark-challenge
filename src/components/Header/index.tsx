import Link from 'next/link';
import * as S from './styles';
import Image from 'next/image';
import { Typography } from '@components/Typography';

export const Header = () => {
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
          <S.Option>
            <Typography size={1.7}>1</Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Sales Pipeline Settings
          </Typography>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.Option>
            <Typography size={1.7} color="dark_blue__800">
              2
            </Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Opportunity Details Settings
          </Typography>
        </S.OptionWrapper>
      </S.OptionsWrapper>

      <S.Button>
        <Typography color="white" fontWeight="700">
          Next
        </Typography>
      </S.Button>
    </S.HeaderWrapper>
  );
};
