import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Option {
  slug: string;
  name: string;
}

export const useGetOptions = () => {
  const { data, error, isLoading } = useSWR<Option[]>(
    'https://run.mocky.io/v3/ff916057-a0ad-47af-a2e3-b97cc3e509b6',
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    },
  );

  const router = useRouter();

  if (error) router.push('/500');

  return {
    optionsData: data,
    isOptionsLoading: isLoading,
  };
};
