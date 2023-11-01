import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

const Page = () => {
    const { t } = useTranslation()

    return <div className={styles.text}>{t('home')}</div>;
};

export default Page;
