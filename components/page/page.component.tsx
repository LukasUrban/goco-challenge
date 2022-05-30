import React, { ReactElement } from 'react';
import { useIsFetching } from 'react-query';

import { PageStyled, SpinnerStyled } from './page.styled';


const Spinner = () => (
  <SpinnerStyled viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </SpinnerStyled>
)

interface IPage {
  children: ReactElement | ReactElement[],
}

export const Page: React.FunctionComponent<IPage> = ({ children }) => {
  const isFetching = useIsFetching()
  return (
    <PageStyled>
      {!!isFetching && <Spinner />}
      {children}
    </PageStyled>
  );
}

