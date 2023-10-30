import React, { PropsWithChildren, useState } from 'react';
import { Theme, ThemeContext } from '@/shared/lib/context';

const DEFAULT_THEME = Theme.LIGHT;

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
