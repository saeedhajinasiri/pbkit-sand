import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tag} from './tag';
import {TagProps} from '../../lib/tag/tag.props'

export default {
  title: 'PB Kit/Atoms/Tag',
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: TagProps) => {

  return (
    <Tag
      {...args}
    />
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <Tag color={'primary'} {...args} />
      <Tag color={'secondary'} {...args} />
      <Tag color={'tertiary'} {...args} />
      <Tag color={'info'} {...args} />
      <Tag color={"danger"} {...args} />
      <Tag color={"warning"} {...args} />
      <Tag color={"success"} {...args} />
      <Tag color={"purple"} {...args} />
      <Tag color={"control"} {...args} />
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag size={'tiny'} {...args} />
      <Tag size={'small'} {...args} />
      <Tag size={'medium'} {...args} />
      <Tag size={'large'} {...args} />
      <Tag size={'huge'} {...args} />
    </div>
  );
}
export const Size = SizeTemplate.bind({});


const RoundedTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag rounded={'full'} {...args} />
      <Tag rounded={'huge'} {...args} />
      <Tag rounded={'large'} {...args} />
      <Tag rounded={'medium'} {...args} />
      <Tag rounded={'small'} {...args} />
      <Tag rounded={'tiny'} {...args} />
      <Tag rounded={'none'} {...args} />
    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});


const DisabledTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag disabled={true} {...args} />
      <Tag disabled={false} {...args} />
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {

  return (
    <div className={'flex flex-col gap-8'}>
      <Tag variant={'filled'} {...args} />
      <Tag variant={'outlined'} {...args} />
    </div>
  );
}
export const Variant = VariantTemplate.bind({});


