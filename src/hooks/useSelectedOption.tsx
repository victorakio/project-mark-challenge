import { createContext, useContext, useState } from 'react';

export enum Steps {
  sales_pipeline = '1',
  opportunity_details = '2',
}

interface SelectedOptionCtx {
  selectedOption: string;
  handleSelectedOption: (option: string) => void;
  currentStep: Steps;
  handleNextStep: () => void;
}

const SelectedOptionContext = createContext({} as SelectedOptionCtx);

export const SelectedOptionProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const [currentStep, setCurrentStep] = useState<Steps>(Steps.sales_pipeline);

  const handleSelectedOption = (option: string) => {
    setSelectedOption((current) => (current === option ? '' : option));
  };

  const handleNextStep = () => {
    if (currentStep === Steps.opportunity_details) {
      setCurrentStep(Steps.sales_pipeline);

      return;
    }

    setCurrentStep(Steps.opportunity_details);
  };

  return (
    <SelectedOptionContext.Provider
      value={{
        selectedOption,
        handleSelectedOption,
        currentStep,
        handleNextStep,
      }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
};

export const useSelectedOption = () => {
  const context = useContext(SelectedOptionContext);

  if (!context) {
    throw new Error('SelectedOptionProvider is missing');
  }

  return context;
};
