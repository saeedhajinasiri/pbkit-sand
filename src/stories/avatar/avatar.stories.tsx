import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Avatar} from './avatar';
import {AvatarProps} from "../../lib/avatar/avatar.props";
import {Wrapper} from "../wrapper";

export default {
  title: 'Components/UI Elements/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <Wrapper title={'Default'}>
      <Avatar {...args}/>
    </Wrapper>
  )
}

export const Default = Template.bind({});

const SizeTemplate: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <div className={'grid grid-cols-1 gap-10'}>
      <Wrapper title={'Small'}>
        <Avatar size={'small'} {...args}/>
      </Wrapper>
      <Wrapper title={'Medium'}>
        <Avatar size={'medium'} {...args}/>
      </Wrapper>
      <Wrapper title={'Large'}>
        <Avatar size={'large'} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Size = SizeTemplate.bind({})
