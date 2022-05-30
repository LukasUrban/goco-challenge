import { IFilter, IFilterOptions, TQuotes } from '@/types/types';

export function getDefaultValue (filterOptions: IFilterOptions, fieldName: string) { // TODO add more input types
  switch (filterOptions?.[fieldName]?.inputType) {
    case 'radio':
      return filterOptions[fieldName]?.options?.find(option => option.default)?.value;
  }
}

export function getDefaultFilter (filterOptions: IFilterOptions = {}) {
  const result: IFilter = {};

  Object.keys(filterOptions).forEach(fieldName => {
    const defaultValue = getDefaultValue(filterOptions, fieldName);
    if (defaultValue) result[fieldName] = defaultValue
  })

  return result;
}

export function sanitizeFilter(filterOptions: IFilterOptions, query: { [key: string]: any } ) {
  let result: IFilter = {};

  Object.keys(query).forEach(queryName => {
    if (Object.keys(filterOptions).find((fieldName) => queryName === fieldName)) {
      switch (filterOptions?.[queryName]?.inputType) { // Check if value is whitelisted, ignore unknown fields, TODO add more input types
        case 'radio':
          if (filterOptions?.[queryName]?.options?.find((option => option.value === query[queryName]))) {
            result[queryName] = query[queryName];
          }
      }
    }
  })

  return result;
}

export function sortByPrice (data: TQuotes) {
  return data.sort((a, b) => {
    if (!a.price) return 1;
    if (!b.price) return -1;
    return a.price - b.price;
  })
}

export function filterData(data: TQuotes, filterValues: IFilter) {
  const { product } = filterValues;
  return (data?.filter(row => product === 'all' ? row : row.product === product));
}

export function addFacetCount(filterOptions: IFilterOptions, data: TQuotes) {
  const enhancedFilterOptions = { ...filterOptions };

  Object.keys(filterOptions)?.forEach(fieldName => {
    if (filterOptions?.[fieldName]?.inputType === 'radio') {
        enhancedFilterOptions[fieldName].options = enhancedFilterOptions?.[fieldName]?.options?.map(option => {
        if (option.value === 'all') return { ...option, count: data.length };
        return { ...option, count: data.filter(row => row.product === option.value).length };
      })
    }
  })

  return enhancedFilterOptions;
}