import Image from 'next/image';
import Link from 'next/link';

import { Steps, useSelectedOption } from '@hooks/useSelectedOption';

import { Typography } from '@components/Typography';

import * as S from './styles';

export const Header = () => {
  const { selectedOption, currentStep, handleNextStep } = useSelectedOption();

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
          <S.Option
            $state={currentStep === Steps.sales_pipeline ? 'active' : 'default'}
            data-testid="first-step-box"
          >
            <Typography
              size={1.7}
              color={
                currentStep === Steps.sales_pipeline
                  ? 'white'
                  : 'dark_blue__800'
              }
            >
              1
            </Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Sales Pipeline Settings
          </Typography>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.Option
            $state={
              currentStep === Steps.opportunity_details ? 'active' : 'default'
            }
            data-testid="second-step-box"
          >
            <Typography
              size={1.7}
              color={
                currentStep === Steps.opportunity_details
                  ? 'white'
                  : 'dark_blue__800'
              }
            >
              2
            </Typography>
          </S.Option>

          <Typography size={1} fontWeight="700">
            Opportunity Details Settings
          </Typography>
        </S.OptionWrapper>
      </S.OptionsWrapper>

      <S.Button disabled={!selectedOption} onClick={handleNextStep}>
        <Typography color="white" fontWeight="700">
          {currentStep === Steps.opportunity_details ? 'Back' : 'Next'}
        </Typography>
      </S.Button>
    </S.HeaderWrapper>
  );
};
