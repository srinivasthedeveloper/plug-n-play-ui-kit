import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding", 
    "@storybook/addon-interactions",
    "@storybook/addon-a11y", // for accessibility
    // "storybook-dark-mode", // for styled dark mode
    "@storybook/addon-themes"// for styled components
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
