import { createContext } from 'react';

export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export interface IThemeContext {
    theme?: Theme | Theme.LIGHT;
    setTheme: (theme: Theme | ((p: Theme) => Theme)) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
