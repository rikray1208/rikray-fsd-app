import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { themeDecorator } from "@/shared/config";
import { Theme } from "@/shared/lib/context";

const meta = {
    title: 'shared/ui/Applink',
    component: AppLink,
    args: {
        children: 'link',
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = { decorators: [themeDecorator(Theme.DARK)] };