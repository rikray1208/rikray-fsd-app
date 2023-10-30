import styles from './styles.module.scss';
import type React from 'react';

import { classNames } from '@/shared/lib';
import { sharedUiComponents } from '@/shared/ui';
import { RouteName } from '@/shared/config';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import {useTranslation} from "react-i18next";

const { AppLink } = sharedUiComponents;

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('nav')

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <AppLink to={RouteName.ABOUT}>{t('About')}</AppLink>
      <AppLink to={RouteName.HOME}>{t('Home')}</AppLink>
      <div className={styles.actions}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
