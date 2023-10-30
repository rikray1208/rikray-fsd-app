import styles from './styles.module.scss';
import type React from 'react';

import { classNames } from '@/shared/lib';
import { useTheme } from '@/shared/lib/hooks';
import { Theme } from '@/shared/lib/context';

import Moon from '@/shared/assests/icons/Moon.svg';
import Sun from '@/shared/assests/icons/Sun.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, switchTheme } = useTheme();

    return (
        <div
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={switchTheme}
        >
            {theme == Theme.DARK ? <Sun /> : <Moon />}
        </div>
    );
};
