import { css } from "@emotion/react";

import { dark } from './dark';
import { light } from './light';

export const THEME = {
  dark,
  light
}

export type ThemeName = keyof typeof THEME;

export const theme = {
  fontPrimary: 'var(--fontPrimary)',
  bgPrimary: 'var(--bgPrimary)',
  bgSecondary: 'var(--bgSecondary)',
  gradientPrimary: 'var(--gradientPrimary)',
  themeBgSize: 'var(--themeBgSize)',
  themeBgTop: 'var(--themeBgTop)',
  themeBgRight: 'var(--themeBgRight)',
};

export type Theme = {
  [P in keyof typeof theme]: string;
};

const applyTheme = (themeName: ThemeName) => {
  const theme = THEME[themeName];
  return {
    [`body[data-theme='${themeName}']`]:
      Object.entries(theme).reduce((acc, [variable, value]) => {
        return Object.assign(acc, {
          [`--${variable}`]: value
        })
      }, {})
  }
}

export const global = css({
  ...applyTheme('light'),
  ...applyTheme('dark'),
  [':root']: {
    '--transitionTiming': '175ms ease-in-out'
  },
})
