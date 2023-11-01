import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { themeDecorator, translationDecorator } from "@/shared/config";
import { Theme } from "@/shared/lib/context";

const meta = {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher,
    decorators: [translationDecorator]
} satisfies Meta<typeof LanguageSwitcher>;

export default meta
type Story = StoryObj<typeof meta>;

export const Light: Story = {}
export const Dark: Story = { decorators: [themeDecorator(Theme.DARK)] }