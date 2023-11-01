import type { Preview } from '@storybook/react';
import { Theme } from '@/shared/lib/context';
import { reactRouterDecorator, styleDecorator, themeDecorator } from "../../src/shared/config";



const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
    },
    decorators: [
        styleDecorator,
        reactRouterDecorator,
        themeDecorator(Theme.LIGHT)
    ]
};


export default preview;
