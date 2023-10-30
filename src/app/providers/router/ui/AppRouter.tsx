import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { RouteName, RouteDescription } from '@/shared/config';

const routes: RouteDescription[] = [
    { path: RouteName.HOME, Element: HomePage },
    { path: RouteName.ABOUT, Element: AboutPage },
];

const routesContent = routes.map(({ path, Element }) => (
    <Route key={path} path={path} element={<Element />} />
));

const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>{...routesContent}</Routes>
        </Suspense>
    );
};

export default AppRouter;
