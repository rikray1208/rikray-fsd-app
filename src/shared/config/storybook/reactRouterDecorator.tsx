import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";


export const reactRouterDecorator = (Story: StoryFn) => {
    return (
      <BrowserRouter>
          <Story/>
      </BrowserRouter>
    )
}