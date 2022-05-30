import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { sanitizeFilter, getDefaultFilter } from '@/lib/filter';
import { IFilterOptions, IFilter } from '@/types/types';


export const useFilter = ({ filterOptions }: {filterOptions: IFilterOptions }) => {
  const router = useRouter();
  const [ filterValues, setFilterValues ] = useState<IFilter>();

  useEffect(() => {
    if (!router.isReady) return;
    setFilterValues({
        ...getDefaultFilter(filterOptions),
        ...sanitizeFilter(filterOptions, router.query)
      })
  }, [router])

  const applyFilter = async (data: IFilter) => {
    await router.push({
      pathname: router.pathname,
      query: data,
    });
  }

  return {
    filterValues,
    applyFilter,
  }
}