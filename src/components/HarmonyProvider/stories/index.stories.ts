import type { Meta } from "@storybook/react";
import { HarmonyProvider } from "harmony-ui";
import { Default } from "./Default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories?raw";

const meta = {
  title: "组件/HarmonyProvider",
  component: HarmonyProvider,
} satisfies Meta<typeof HarmonyProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
