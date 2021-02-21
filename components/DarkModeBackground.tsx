import styled from '@emotion/styled';

import { theme } from '../theme/themes';

export const Background = styled.div`
  z-index: -2;
  position: fixed;
  top: ${theme.themeBgTop};
  right: ${theme.themeBgRight};

  width: ${theme.themeBgSize};
  height: ${theme.themeBgSize};

  transition:
    top 300ms ease-in-out,
    right 300ms ease-in-out,
    width 300ms ease-in-out,
    height 300ms ease-in-out;

  border-radius: 50%;
  background-color: #1B1920;

  @media (prefers-reduced-motion) {
    transition: none !important;
  }
`;
