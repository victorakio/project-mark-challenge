import { useState } from 'react';

export const useSelectedOption = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectedOption = (option: string) => {
    setSelectedOption((current) => (current === option ? '' : option));
  };

  return {
    selectedOption,
    handleSelectedOption,
  };
};
