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
    <div className={'flex flex-col gap-y-10'}>
      <Wrapper title={'XXS'}>
        <Avatar size={'xxs'} {...args}/>
      </Wrapper>
      <Wrapper title={'XS'}>
        <Avatar size={'xs'} {...args}/>
      </Wrapper>
      <Wrapper title={'Sm'}>
        <Avatar size={'sm'} {...args}/>
      </Wrapper>
      <Wrapper title={'Base'}>
        <Avatar size={'base'} {...args}/>
      </Wrapper>
      <Wrapper title={'Lg'}>
        <Avatar size={'lg'} {...args}/>
      </Wrapper>
      <Wrapper title={'Xl'}>
        <Avatar size={'xl'} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Size = SizeTemplate.bind({})

const RoundedTemplate: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <div className={'grid grid-cols-1 gap-10'}>
      <Wrapper title={'Full'}>
        <Avatar rounded={'full'} {...args}/>
      </Wrapper>
      <Wrapper title={'Huge'}>
        <Avatar rounded={'huge'} {...args}/>
      </Wrapper>
      <Wrapper title={'Large'}>
        <Avatar rounded={'large'} {...args}/>
      </Wrapper>
      <Wrapper title={'Medium'}>
        <Avatar rounded={'medium'} {...args}/>
      </Wrapper>
      <Wrapper title={'Small'}>
        <Avatar rounded={'small'} {...args}/>
      </Wrapper>
      <Wrapper title={'Tiny'}>
        <Avatar rounded={'tiny'} {...args}/>
      </Wrapper>
      <Wrapper title={'None'}>
        <Avatar rounded={'none'} {...args}/>
      </Wrapper>

    </div>
  );
}
export const Rounded = RoundedTemplate.bind({})

const isOnlineAvatarTemplate: ComponentStory<typeof Avatar> = ({...args}: AvatarProps) => {
  return (
    <div className={'grid grid-cols-1 gap-10'}>

      <Wrapper title={'online avatar'}>
        <Avatar
          isOnline={true}
          {...args}/>
      </Wrapper>

      <Wrapper title={'offline avatar'}>
        <Avatar
          isOnline={false}
          {...args}/>
      </Wrapper>

    </div>
  );
}
export const IsOnline = isOnlineAvatarTemplate.bind({})