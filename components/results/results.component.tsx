import React, { FunctionComponent } from 'react';

import { TQuotes } from '@/types/types';
import {
  ResultsStyled,
} from './results.styled';
import { CarTile, PetTile } from '@/components/product-tile';


export interface IFilterComponent {
  quotes: TQuotes,
  isPreviousData: boolean,
}

const ResultsComponent: FunctionComponent<IFilterComponent> = ({ quotes, isPreviousData }) => {
  return (
    <ResultsStyled>
      {quotes?.map(row => {
        if (row.product === 'car') return (
          <CarTile
            key={row.id}
            name={row.name}
            price={row.price}
            features={row.features}
            isHydrated={!isPreviousData}
          />
        )
        if (row.product === 'pet') return (
          <PetTile
            key={row.id}
            name={row.name}
            price={row.price}
            features={row.features}
            isHydrated={!isPreviousData}
          />
        )
      })
      }
    </ResultsStyled>
  );
}

export const Results = React.memo<IFilterComponent>(ResultsComponent,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
)