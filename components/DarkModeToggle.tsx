import styled from '@emotion/styled';

import { useTheme } from '../theme/context';
import { theme } from '../theme/themes';

export const DarkModeToggleComponent = () => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <CheckboxContainer>
      <Input type="checkbox" checked={theme === 'dark'} onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')} />
        <CheckboxIndicator />
      </CheckboxContainer>
    </>
  );
};

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const CheckboxContainer = styled.label`
  position: relative;
  display: inline-block;
  border-radius: 60px;
  height: 1.5rem;
  width: 2.5rem;

  transition: background-color var(--transitionTiming);
  /* box-shadow: inset 0 1px 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13), 0 3px 3px hsla(0, 0%, 0%, 0.05); */

  background-color: ${theme.bgSecondary};
`;

const CheckboxIndicator = styled.span`
  position: absolute;
  background: ${theme.gradientPrimary};

  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  transition: transform var(--transitionTiming);

  &::after {
    content: '';
    position: absolute;
    opacity: 0;
    transform:
      scale(0)
      translateX(-100%);
    transform-origin: top right;
    transition: all var(--transitionTiming);

    position: absolute;
    top: 5%;
    right: -2%;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background-color: transparent;

    ${Input}:checked ~ & {
      opacity: 1;
      transform:
        scale(100%)
        translateX(0);
      background-color: ${theme.bgPrimary};
    }
  }

  ${Input}:checked ~ & {
    transform: translateX(1rem);
  }
`;
