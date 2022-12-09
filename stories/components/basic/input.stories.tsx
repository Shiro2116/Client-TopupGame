import { Meta } from "@storybook/react";
import Input, { inputProps } from "../../../components/basic/Input/Input";

export default {
  title: "Components/Basic/Input",
  Component: Input,
} as Meta;

const Template = (args: inputProps) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
