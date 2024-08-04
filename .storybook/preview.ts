import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    tags: ["autodocs"],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
