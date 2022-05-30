import { fireEvent, render } from '@testing-library/react';

import { dummyData } from '@/dummy-data';
import { Filter } from '@/components/filter'
import { filterData, addFacetCount, getDefaultFilter } from '@/lib/filter';
import { HOME_FILTER_OPTIONS } from '@/pages';

const defaultFilterRes = getDefaultFilter(HOME_FILTER_OPTIONS);


describe('Filter', () => {

  test('Facet count', () => {
    const result = addFacetCount(HOME_FILTER_OPTIONS, dummyData.quotes);
    expect (result?.product?.options?.[0].count).toBe(3)
  })

  test('Quote filter', () => {
    const result = filterData(dummyData.quotes, defaultFilterRes);
    expect (result?.length).toBe(3)
  })

  test("Filter callback", () => {
    const spy = jest.fn(val => val);
    const { container } = render (
      <Filter
        onChange={spy}
        filterOptions={HOME_FILTER_OPTIONS}
        values={defaultFilterRes}
      />
    );
    const petRadio = container.querySelector('#product-pet');
    if (petRadio) fireEvent.click(petRadio);
    expect(spy.mock.results[0]?.value?.product).toBe('pet');
  });

})
