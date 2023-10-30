import './styles/index.scss';

import { AppRouter } from '@/app/providers';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { useTheme } from '@/shared/lib/hooks';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <>
            <div className={classNames('app', {})} data-theme={theme}>
                <Suspense fallback={'loading'}>
                    <Navbar />
                    <AppRouter />
                </Suspense>
            </div>
        </>
    );
};

export default App;
