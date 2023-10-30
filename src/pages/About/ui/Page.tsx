import React from 'react';
import { useTranslation } from 'react-i18next';

const Page = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('greetings')}
        </div>
    );
};

export default Page;
