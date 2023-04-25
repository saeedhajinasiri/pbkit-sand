import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Badge} from './badge';
import {BadgeProps} from "../../lib/badge/badge.props";

const TempButton = ({title}: { title: string }) => {
  return (
    <div className={'w-36 h-12 rounded bg-grey-200 flex items-center justify-center text-white'}>{title}</div>
  )
}

export default {
  title: 'Components/UI Elements/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <Badge {...args} badgeContent={24}>
      <TempButton title={'Badge'}/>
    </Badge>
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge color={'primary'} {...args} children={<TempButton title={'Primary'} {...args}/>} badgeContent={24}/>
      <Badge color={'secondary'} {...args} children={<TempButton title={'Secondary'} {...args}/>} badgeContent={24}/>
      <Badge color={'tertiary'} {...args} children={<TempButton title={'Tertiary'} {...args}/>} badgeContent={24}/>
      <Badge color={'info'} {...args} children={<TempButton title={'Info'} {...args}/>} badgeContent={24}/>
      <Badge color={"danger"} {...args} children={<TempButton title={'Danger'} {...args}/>} badgeContent={24}/>
      <Badge color={"warning"} {...args} children={<TempButton title={'Warning'} {...args}/>} badgeContent={24}/>
      <Badge color={"success"} {...args} children={<TempButton title={'Success'} {...args}/>} badgeContent={24}/>
      <Badge color={"control"} {...args} children={<TempButton title={'Control'} {...args}/>} badgeContent={24}/>
      <Badge color={"purple"} {...args} children={<TempButton title={'Purple'} {...args}/>} badgeContent={24}/>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge variant={'dot'} {...args} children={<TempButton title={'Dot'}/>} badgeContent={24}/>
      <Badge variant={'standard'} {...args} children={<TempButton title={'Standard'}/>} badgeContent={24}/>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const ShapeTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge shape={'rounded'} {...args} children={<TempButton title={'Rounded'}/>} badgeContent={24}/>
      <Badge shape={'rectangle'} {...args} children={<TempButton title={'Rectangle'}/>} badgeContent={24}/>
    </div>
  );
}
export const Shape = ShapeTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge size={'tiny'} {...args} children={<TempButton title={'Tiny'}/>} badgeContent={2}/>
      <Badge size={'small'} {...args} children={<TempButton title={'Small'}/>} badgeContent={4}/>
      <Badge size={'medium'} {...args} children={<TempButton title={'Medium'}/>} badgeContent={24}/>
      <Badge size={'large'} {...args} children={<TempButton title={'Large'}/>} badgeContent={24}/>
      <Badge size={'huge'} {...args} children={<TempButton title={'Huge'}/>} badgeContent={24}/>
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const AnchorOriginTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge anchorOrigin={{vertical: 'top', horizontal: 'right'}} {...args} children={<TempButton title={'Top-Right'}/>} badgeContent={24}/>
      <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} {...args} children={<TempButton title={'Top-Left'}/>} badgeContent={24}/>
      <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} {...args} children={<TempButton title={'Bottom-Right'}/>} badgeContent={24}/>
      <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} {...args} children={<TempButton title={'Bottom-Left'}/>} badgeContent={24}/>
    </div>
  );
}
export const AnchorOrigin = AnchorOriginTemplate.bind({});

const MaxTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => {
  return (
    <div className={'flex row gap-8 flex-wrap'}>
      <Badge max={99} {...args} children={<TempButton title={'Max'}/>} badgeContent={100}/>
    </div>
  );
}
export const Max = MaxTemplate.bind({});

