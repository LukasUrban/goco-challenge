import axios, { AxiosResponse } from "axios";
import { IFilter, IQuote } from '@/types/types';
import { useQuery } from 'react-query';


const fetchQuote = (): Promise<AxiosResponse<IQuote>['data']> =>
   axios
    .get(`${process.env.API_URL}/hardmode`)
    .then(({ data }) => data);

export const useFetchQuote = (filter: IFilter | undefined) => (
  useQuery(
    ["getQuote", filter],
    () => fetchQuote(),
    {
      retry: 3,
      retryDelay: 1000,
      keepPreviousData: true,
      cacheTime: 0,
      enabled: !!filter,
    }
  )
)