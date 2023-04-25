import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Div} from './div';
import {DivProps} from "../../lib/div/div.props";

export default {
  title: 'Components/UI Elements/Div',
  component: Div,
  argTypes: {},
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = (args: DivProps) => {
  return (
    <Div className={'gap-4'} {...args}>
      <p>item-1</p>
      <p>item-2</p>
      <p>item-3</p>
    </Div>
  )
}

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
