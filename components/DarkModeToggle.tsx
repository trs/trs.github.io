import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '../theme/context';
import { theme } from '../theme/themes';

export const DarkModeToggleComponent = () => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Background />
      <Container>
        <Input type="checkbox" checked={theme === 'dark'} onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')} />
        <Checkbox></Checkbox>
      </Container>
    </>
  );
};

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const Container = styled.label`
  position: relative;
  display: inline-block;
  border-radius: 60px;
  height: 30px;
  width: 50px;

  transition: background-color var(--transitionTiming);
  box-shadow: 0 1px 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05);

  background-color: ${theme.bgSecondary};
`;

const Checkbox = styled.span`
  position: absolute;
  background: ${theme.gradientPrimary};

  width: 30px;
  height: 30px;
  border-radius: 50%;

  transition: transform var(--transitionTiming);

  &::after {
    content: '';
    opacity: 0;
    transform:
      scale(0)
      translateX(-100%);
    transform-origin: top right;
    transition:
      transform var(--transitionTiming),
      opacity var(--transitionTiming);

    position: absolute;
    top: 5%;
    right: -2%;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background-color: transparent;
  }

  ${Input}:checked ~ & {
    transform: translateX(20px);

    &::after {
      opacity: 1;
      transform: scale(1) translateX(0);
      background-color: ${theme.bgPrimary};
    }
  }
`;

const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: ${theme.themeBgTop};
  right: ${theme.themeBgRight};

  width: ${theme.themeBgSize};
  height: ${theme.themeBgSize};

  transition: all 400ms ease-in-out;

  border-radius: 50%;
  background-color: #1B1920;

  @media (prefers-reduced-motion) {
    transition: none !important;
  }
`;
