import { Meta } from "@storybook/react";
import GameItem, { GameItemScript } from "../../../components/kompleks/StepItems/GameItem";

export default {
  title: "Components/Kompleks/GameItem",
  Component: GameItem,
} as Meta;

const Template = (args: GameItemScript) => <GameItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  title : "Super Mechs",
  category: "Mobile",
thumbnail: '/img/Thumbnail-1.png'
};
