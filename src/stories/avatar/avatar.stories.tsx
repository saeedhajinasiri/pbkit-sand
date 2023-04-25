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
      <Wrapper title={'Tiny'}>
        <Avatar size={'tiny'} {...args}/>
      </Wrapper>
      <Wrapper title={'Small'}>
        <Avatar size={'small'} {...args}/>
      </Wrapper>
      <Wrapper title={'Medium'}>
        <Avatar size={'medium'} {...args}/>
      </Wrapper>
      <Wrapper title={'Large'}>
        <Avatar size={'large'} {...args}/>
      </Wrapper>
      <Wrapper title={'Huge'}>
        <Avatar size={'huge'} {...args}/>
      </Wrapper>
      <Wrapper title={'Whacking'}>
        <Avatar size={'whacking'} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Size = SizeTemplate.bind({})



const ShapeTemplate: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <div className={'grid grid-cols-1 gap-10'}>
      <Wrapper title={'Rounded'}>
        <Avatar shape={'rounded'} {...args}/>
      </Wrapper>
      <Wrapper title={'Rectangle'}>
        <Avatar shape={'rectangle'} {...args}/>
      </Wrapper>

    </div>
  );
}
export const Shape = ShapeTemplate.bind({})


const AvatarPositionTemplate: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <div className={'grid grid-cols-1 gap-10'}>
      <Wrapper title={'Top Right'}>
        <Avatar position={'topRight'} {...args}/>
      </Wrapper>
      <Wrapper title={'Top Left'}>
        <Avatar position={'topLeft'} {...args}/>
      </Wrapper>
      <Wrapper title={'Bottom Right'}>
        <Avatar position={'bottomRight'} {...args}/>
      </Wrapper>
      <Wrapper title={'Bottom Left'}>
        <Avatar position={'bottomLeft'} {...args}/>
      </Wrapper>

    </div>
  );
}
export const AvatarPosition = AvatarPositionTemplate.bind({})