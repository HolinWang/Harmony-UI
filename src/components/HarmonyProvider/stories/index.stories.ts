import type { Meta } from "@storybook/react";
import { HarmonyProvider } from "harmony-ui";
import { Default } from "./Default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories?raw";
// @ts-expect-error - required for ts
import NestingSource from "./Nesting.stories?raw";
import { Nesting } from "./Nesting.stories";
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

( Nesting as any).parameters = {
  docs: {
    description: {
      story: "HarmonyProvider可以嵌套使用。",
    },
  },
  source: {
    code: NestingSource,
  },
};


export { Default, Nesting };
