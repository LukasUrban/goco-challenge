import React from 'react';
import Link from 'next/link';

import { IPetProduct } from '@/types/types';
import {
  ProductSectionStyled,
  ProductTileStyled,
  ProductName,
  ProductRow,
} from './product-tile.styled';


interface IPetTile extends Omit<IPetProduct, 'id' | 'product'> {
  isHydrated: boolean,
}

export const PetTile: React.FunctionComponent<IPetTile> = ({ name, price, features = {}, isHydrated }) => {
  return (
    <ProductTileStyled isHydrated={isHydrated}>
      <ProductName>{name}</ProductName>
      <ProductRow>
        <ProductSectionStyled>
          <ul>
            <li>Cover start date: <strong>{features['cover-start-date'] ? new Date(features['cover-start-date']).toLocaleDateString('en-US') : 'unknown'}</strong></li>
            <li>Cover-type: <strong>{features.breed ? features.breed : 'unknown'}</strong></li>
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

