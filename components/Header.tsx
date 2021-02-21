import styled from '@emotion/styled';

import {DarkModeToggleComponent} from '../components/DarkModeToggle';

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <DarkModeToggleComponent />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  width: 140px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
