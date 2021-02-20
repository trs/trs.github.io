import React from 'react';
import styled from '@emotion/styled';

import {DarkModeToggleComponent} from '../components/DarkModeToggle';

export const HeaderComponent = () => {
  return (
    <>
      <HeaderContainer>
        <DarkModeToggleComponent />
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 2rem;
`;
