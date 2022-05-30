import React from 'react';
import Link from 'next/link';

import { ICarProduct } from '@/types/types';
import {
  ProductSectionStyled,
  ProductTileStyled,
  ProductName,
  ProductPriceStyled,
  ProductRow,
  ProductExcessStyled,
} from './product-tile.styled';


export interface ICarTile extends Omit<ICarProduct, 'id' | 'product'> {
  isHydrated: boolean,
}

export const CarTile: React.FunctionComponent<ICarTile> =
  ({
     name,
     price,
     features = {},
     isHydrated,
  }) => {
  return (
    <ProductTileStyled isHydrated={isHydrated}>
      <ProductName>{name}</ProductName>
      <ProductPriceStyled>£{price}</ProductPriceStyled>
      <ProductExcessStyled>£{features.excess} excess</ProductExcessStyled>
      <ProductRow>
        <ProductSectionStyled>
          <ul>
            <li>Cover start date: <strong>{features['cover-start-date'] ? new Date(features['cover-start-date']).toLocaleDateString('en-US') : 'unknown'}</strong></li>
            <li>Cover-type: <strong>{features['cover-type'] ? features['cover-type'] : 'unknown'}</strong></li>
            <li>Drivers: <strong>{features['additional-drivers']}</strong></li>
            <li>Claims: <strong>{features.claims}</strong></li>
          </ul>
        </ProductSectionStyled>
        <ProductSectionStyled>
          <Link href="/signup">
            <a>Continue</a>
          </Link>
        </ProductSectionStyled>
      </ProductRow>
    </ProductTileStyled>
  );
}


