import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import useSWR from 'swr';

interface Option {
  slug: string;
  name: string;
}

interface Status {
  slug: string;
  containingPlans: string[];
}
interface SelectedOptionCtx {
  selectedOption: string;
  handleSelectedOption: (option: string) => void;
  optionsData: Option[] | undefined;
  statusesData: Status[] | undefined;
}

const SelectedOptionContext = createContext({} as SelectedOptionCtx);

export const SelectedOptionProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectedOption = (option: string) => {
    setSelectedOption((current) => (current === option ? '' : option));
  };

  const { data: optionsData } = useSWR<Option[]>(
    'https://run.mocky.io/v3/ff916057-a0ad-47af-a2e3-b97cc3e509b6',
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    },
  );

  const { data: statusesData } = useSWR<Status[]>(
    'https://run.mocky.io/v3/469e2afb-49c7-45e2-9ea0-bab460aa352c',
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    },
  );

  return (
    <SelectedOptionContext.Provider
      value={{
        selectedOption,
        handleSelectedOption,
        optionsData,
        statusesData,
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
