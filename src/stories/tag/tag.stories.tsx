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
      variant={args.variant}
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      rounded={args.rounded}
      {...args}
      id={args.id}
      title={args.title}
    />
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <Tag {...args} color={'primary'} title={'title'}/>
      <Tag {...args} color={'secondary'} title={'title'}/>
      <Tag {...args} color={'tertiary'} title={'title'}/>
      <Tag {...args} color={'info'} title={'title'}/>
      <Tag {...args} color={"danger"} title={'title'}/>
      <Tag {...args} color={"warning"} title={'title'}/>
      <Tag {...args} color={"success"} title={'title'}/>
      <Tag {...args} color={"purple"} title={'title'}/>
      <Tag {...args} color={"control"} title={'title'}/>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag {...args} size={'tiny'} title={'title'}/>
      <Tag {...args} size={'small'} title={'title'}/>
      <Tag {...args} size={'medium'} title={'title'}/>
      <Tag {...args} size={'large'} title={'title'}/>
      <Tag {...args} size={'huge'} title={'title'}/>
    </div>
  );
}
export const Size = SizeTemplate.bind({});


const RoundedTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag {...args} rounded={'full'} title={'title'}/>
      <Tag {...args} rounded={'huge'} title={'title'}/>
      <Tag {...args} rounded={'large'} title={'title'}/>
      <Tag {...args} rounded={'medium'} title={'title'}/>
      <Tag {...args} rounded={'small'} title={'title'}/>
      <Tag {...args} rounded={'tiny'} title={'title'}/>
      <Tag {...args} rounded={'none'} title={'title'}/>
    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});


const DisabledTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag {...args} disabled={true}/>
      <Tag {...args} disabled={false}/>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>
      <Tag {...args} variant={'filled'}/>
      <Tag {...args} variant={'outlined'}/>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});


