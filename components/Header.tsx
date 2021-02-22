import styled from '@emotion/styled';
import { theme } from '~/theme/themes';

import {DarkModeToggleComponent} from '../components/DarkModeToggle';

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Title>Tyler Stewart</Title>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#" target="_blank">Github</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" target="_blank">Linkedin</NavLink>
          </NavItem>
        </NavList>
      </Nav>

      <Toggle />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  gap: 4rem;

  color: ${theme.fontPrimary};
  font-family: Inter, Arial, Helvetica, sans-serif;
  transition: color var(--transitionTiming);
  font-size: 1.0rem;
  font-weight: 600;
`;

const Title = styled.p`
  font-size: inherit;
  font-weight: inherit;
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: none;

  @media only screen and (min-width : 400px) {
    display: initial;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  font-weight: inherit;
`;

const NavItem = styled.li`
  font-weight: inherit;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-weight: inherit;
`;

const Toggle = styled(DarkModeToggleComponent)`
`;
