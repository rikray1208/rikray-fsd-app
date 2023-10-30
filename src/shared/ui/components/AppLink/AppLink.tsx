import styles from './styles.module.scss';
import type React from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: React.FC<AppLinkProps> = ({ className, ...linkProps }) => {
    return (
      <Link
        {...linkProps}
        className={classNames(styles.AppLink, {}, [className])}
      >
          {linkProps.children}
      </Link>
    );
};
