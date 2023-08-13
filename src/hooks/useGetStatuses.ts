import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface Status {
  slug: string;
  containingPlans: string[];
}

export const useGetStatuses = () => {
  const { data, error, isLoading } = useSWR<Status[]>(
    'https://run.mocky.io/v3/469e2afb-49c7-45e2-9ea0-bab460aa352c',
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    },
  );

  const router = useRouter();

  if (error) router.push('/500');

  return {
    statusesData: data,
    isStatusesLoading: isLoading,
  };
};
