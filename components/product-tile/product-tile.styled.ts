import styled from 'styled-components';

import { breakpoints } from '@/styles/variables';

export const ProductTileStyled = styled.div<{ isHydrated: boolean }>`
  display: flex;
  flex-direction: column;
  background: 0 0 no-repeat padding-box padding-box rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 16%) 0 3px 30px;
  padding: 24px 32px 40px;
  margin: 0 0 16px;
  border-radius: 8px;
  opacity: ${props => props.isHydrated ? 1 : 0.5 };
  
  ul {
    padding: 0;
  }
  
  li {
    font-size: 15px;
    list-style: none;
    margin-bottom: 6px;
  }
  
  a {
    flex: 0 0 0;
    background: #3a955e;
    border-radius: 8px;
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
    margin-left: auto;
    align-self: flex-start;
    width: 100%;

    @media (min-width: ${breakpoints.md}) {
      width: auto;
    }
  }
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  
`;

export const ProductPriceStyled = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const ProductExcessStyled = styled.div`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 4px;
`;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ProductSectionStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    width: 50%;
    background: white;
  }
`;

