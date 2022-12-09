import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UserNameButton from "../components/buttons/userNameButton"; // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: "Example/UserNameButton",
  component: UserNameButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UserNameButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserNameButton> = (args) => (
  <UserNameButton {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
