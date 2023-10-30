import { useContext } from 'react';
import { Theme, ThemeContext } from '../context';

interface UseThemeReturn {
    theme: Theme;
    switchTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        setTheme((prev) => (prev == Theme.DARK ? Theme.LIGHT : Theme.DARK));
    };

    return { theme, switchTheme };
};
