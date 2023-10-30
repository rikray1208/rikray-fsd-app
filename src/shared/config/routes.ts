import { ComponentType } from 'react';

export enum RouteName {
    HOME = '/',
    ABOUT = '/about',
}

export interface RouteDescription {
    path: RouteName;
    Element: ComponentType;
}
