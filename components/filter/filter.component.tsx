import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

import { IFilterOptions, IFilter } from '@/types/types';
import {
  FilterStyled,
  InputWrapperStyled,
  FilterInnerStyled,
} from './filter.styled';


export interface IFilterComponent {
  onChange: (values: IFilter) => void,
  filterOptions?: IFilterOptions,
  values?: IFilter
}

export const FilterForm: FunctionComponent<IFilterComponent> =
  ({
     onChange,
     filterOptions = {},
     values,
  }) => {
  const { register, getValues } = useForm({ defaultValues: values });
  if (!filterOptions) return null;
  return (
    <FilterStyled>
      <form onChange={() => onChange(getValues())}>
        <FilterInnerStyled>
          {Object.keys(filterOptions).map(fieldName => {
            if (filterOptions?.[fieldName]?.inputType === 'radio') {
              return filterOptions[fieldName]?.options?.map(option => {
                const id = `${fieldName}-${option.value}`;
                return (
                  <InputWrapperStyled key={id}>
                    <label htmlFor={id}>
                      <input type="radio" id={id} value={option.value} {...register(fieldName)} />
                      {option.label} ({option.count})
                    </label>
                  </InputWrapperStyled>
                )
              })
            }
          })}
        </FilterInnerStyled>
      </form>
    </FilterStyled>
  );
}

export const FilterFormMemoized = React.memo<IFilterComponent>(FilterForm,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps?.filterOptions) === JSON.stringify(nextProps?.filterOptions)
)

export const Filter: FunctionComponent<IFilterComponent> =
  ({
     onChange,
     filterOptions,
     values,
  }) => (
  <>
    {values && filterOptions &&
      <FilterFormMemoized
        onChange={onChange}
        filterOptions={filterOptions}
        values={values}
      />
    }
  </>
)
