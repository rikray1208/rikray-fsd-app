import { StoryFn } from '@storybook/react';
import { Theme } from "@/shared/lib/context";


// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
      <div className={'app'} data-theme={theme}>
          <Story/>
      </div>
    )
}