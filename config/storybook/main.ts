import type { StorybookConfig } from '@storybook/react-webpack5';
import { storybookWebpack } from "./webpack";

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    webpackFinal: storybookWebpack,

};
export default config;
