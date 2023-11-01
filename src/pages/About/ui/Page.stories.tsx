import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';
import { themeDecorator } from "@/shared/config";
import { Theme } from "@/shared/lib/context";

const meta = {
    title: 'pages/About',
    component: Page
} satisfies Meta<typeof Page>;

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {}
export const Dark: Story = { decorators: [themeDecorator(Theme.DARK)] }