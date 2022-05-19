import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Header } from "./index";

type StoryMeta = ComponentMeta<typeof Header>;
type StoryType = ComponentStoryObj<typeof Header>;

export default {
  title: "Components/Header",
  component: Header,
} as StoryMeta;

export const Link: StoryType = {
  args: {
    as: "a",
    href: "https://styled-components.com/",
    children: "link",
    isCurrent: false,
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};
