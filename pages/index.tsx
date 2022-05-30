import type { NextPage } from 'next';
import Head from 'next/head';

import { Filter } from '@/components/filter';
import { IFilterOptions, TQuotes } from '@/types/types';
import { useFilter } from '@/hooks/filter.hook';
import { Page } from '@/components/page/page.component';
import { useFetchQuote } from '@/hooks/quotes.hook';
import { useEffect, useState } from 'react';
import { addFacetCount, filterData, sortByPrice } from '@/lib/filter';
import { Results } from '@/components/results';


export const HOME_FILTER_OPTIONS: IFilterOptions = {
  product:  {
    inputType: 'radio',
    options: [
      { value: 'all', label: 'All', default: true },
      { value: 'car', label: 'Car' },
      { value: 'pet', label: 'Pet'},
      { value: 'dragon', label: 'Dragon'},
    ]
  },
}

const Home: NextPage = () => {
  const [quotesFilteredSorted, setQuotesFilteredSorted] = useState<TQuotes>();
  const [filterOptionsEnhanced, setFilterOptionsEnhanced] = useState<IFilterOptions>();
  const { applyFilter, filterValues } = useFilter({ filterOptions: HOME_FILTER_OPTIONS });
  const { data, isLoading, isError, isPreviousData, isFetched } = useFetchQuote(filterValues);
  const dataStringified = JSON.stringify(data);

  useEffect(() => {
    if (!data?.quotes) return;
    setFilterOptionsEnhanced(addFacetCount(HOME_FILTER_OPTIONS, data.quotes));
  }, [dataStringified])

  useEffect(() => {
    if (!data?.quotes || !filterValues) return;
    const filtered = filterData(data.quotes, filterValues);
    const filteredSorted = sortByPrice(filtered);
    setQuotesFilteredSorted(filteredSorted);
  }, [dataStringified, filterValues])

  const dataFound = !!quotesFilteredSorted?.length && !isLoading && !isPreviousData && !isError && isFetched;
  const dataIsLoading = isLoading || isPreviousData;
  const dealsNotFound = !dataFound && !dataIsLoading && isFetched;

  return (
    <Page>
      <Head>
        <title>GoCo FE challenge</title>
        <meta name="description" content="GoCo FE challenge" />
      </Head>
      <div className="container">
        {dataIsLoading && !isPreviousData && <h1>Looking for deals ...</h1>}
        {(dataFound || isPreviousData) && <h1>We found {quotesFilteredSorted?.length} deals</h1>}
        {dealsNotFound && !isError && <h1>We didn't find any deals</h1>}
        {isError && <h1>Something went wrong, please try <a href="/" className="blue">again</a> later...</h1>}
        {!isError && (
          <Filter
            onChange={applyFilter}
            filterOptions={filterOptionsEnhanced}
            values={filterValues}
          />
        )}
        {(dataFound || dataIsLoading) && quotesFilteredSorted && (
          <Results isPreviousData={isPreviousData} quotes={quotesFilteredSorted} />
        )}
      </div>
    </Page>
  )
}

export default Home
