import { ColumnVariants } from '@components/StatusColumn';
import { createContext, useContext, useState } from 'react';

interface SelectedOptionCtx {
  selectedOption: string;
  handleSelectedOption: (option: string) => void;
  options: string[];
}

const SelectedOptionContext = createContext({} as SelectedOptionCtx);

export const SelectedOptionProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = Object.keys(ColumnVariants);

  const handleSelectedOption = (option: string) => {
    setSelectedOption((current) => (current === option ? '' : option));
  };

  return (
    <SelectedOptionContext.Provider
      value={{ selectedOption, handleSelectedOption, options }}
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
