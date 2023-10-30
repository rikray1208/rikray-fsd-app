import styles from './styles.module.scss';
import type React from 'react';

import { classNames } from '@/shared/lib';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    className,
}) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <div
            className={classNames(styles.LanguageSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('lang')}
        </div>
    );
};
