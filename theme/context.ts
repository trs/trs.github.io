import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { ThemeName } from './themes';

type ThemeProviderValue = [ThemeName, Dispatch<SetStateAction<ThemeName>>];

export const ThemeContext = createContext<ThemeProviderValue>([] as unknown as ThemeProviderValue);

export const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return [theme, setTheme] as const;
}
