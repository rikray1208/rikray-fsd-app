import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { themeDecorator } from "@/shared/config";
import { Theme } from "@/shared/lib/context";

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>;

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {}
export const Dark: Story = { decorators: [themeDecorator(Theme.DARK)] }