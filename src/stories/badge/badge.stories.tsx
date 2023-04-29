import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Badge} from './badge';
import {BadgeProps} from "../../lib/badge/badge.props";
import {Wrapper} from "../wrapper";

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

const Template: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'badgeContent'>) => {
  return (
    <Badge badgeContent={24} {...args}>
      <TempButton title={'Badge'}/>
    </Badge>
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8'}>
      <Wrapper title={'Primary'}>
        <Badge color={'primary'} children={<TempButton title={'Primary'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Secondary'}>
        <Badge color={'secondary'} children={<TempButton title={'Secondary'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Tertiary'}>
        <Badge color={'tertiary'} children={<TempButton title={'Tertiary'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Info'}>
        <Badge color={'info'} children={<TempButton title={'Info'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Danger'}>
        <Badge color={"danger"} children={<TempButton title={'Danger'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Warning'}>
        <Badge color={"warning"} children={<TempButton title={'Warning'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Success'}>
        <Badge color={"success"} children={<TempButton title={'Success'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Control'}>
        <Badge color={"control"} children={<TempButton title={'Control'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Purple'}>
        <Badge color={"purple"} children={<TempButton title={'Purple'} {...args}/>} badgeContent={24} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper title={'Dot'}>
        <Badge variant={'dot'} children={<TempButton title={'Dot'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Standard'}>
        <Badge variant={'standard'} children={<TempButton title={'Standard'}/>} badgeContent={24} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const ShapeTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper title={'Rounded'}>
        <Badge shape={'rounded'} children={<TempButton title={'Rounded'}/>} badgeContent={24} {...args} />
      </Wrapper>
      <Wrapper title={'Rectangle'}>
        <Badge shape={'rectangle'} children={<TempButton title={'Rectangle'}/>} badgeContent={24} {...args} />
      </Wrapper>
    </div>
  );
}
export const Shape = ShapeTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'grid grid-cols-1 sm:grid-cols-2 mt-2 gap-8'}>
      <Wrapper title={'XXS'}>
        <Badge size={'xxs'} children={<TempButton title={'XXS'}/>} badgeContent={2} {...args}/>
      </Wrapper>
      <Wrapper title={'XS'}>
        <Badge size={'xs'} children={<TempButton title={'XS'}/>} badgeContent={4} {...args}/>
      </Wrapper>
      <Wrapper title={'SM'}>
        <Badge size={'sm'} children={<TempButton title={'SM'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Base'}>
        <Badge size={'base'} children={<TempButton title={'Base'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'LG'}>
        <Badge size={'lg'} children={<TempButton title={'Lg'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'XL'}>
        <Badge size={'xl'} children={<TempButton title={'Xl'}/>} badgeContent={24} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const AnchorOriginTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Wrapper title={'Top Right'}>
        <Badge anchorOrigin={{vertical: 'top', horizontal: 'right'}} children={<TempButton title={'Top-Right'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Top Left'}>
        <Badge anchorOrigin={{vertical: 'top', horizontal: 'left'}} children={<TempButton title={'Top-Left'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Bottom Right'}>
        <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} children={<TempButton title={'Bottom-Right'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Bottom Right'}>
        <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} children={<TempButton title={'Bottom-Left'}/>} badgeContent={24} {...args}/>
      </Wrapper>
    </div>
  );
}
export const AnchorOrigin = AnchorOriginTemplate.bind({});

const AnchorSituationTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper title={'Inner'}>
        <Badge anchorSituation={'inner'} children={<TempButton title={'inner'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Inner Dot'}>
        <Badge variant={'dot'} anchorSituation={'inner'} children={<TempButton title={'inner'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Outer'}>
        <Badge anchorSituation={'outer'} children={<TempButton title={'outer'}/>} badgeContent={24} {...args}/>
      </Wrapper>
      <Wrapper title={'Outer Dot'}>
        <Badge variant={'dot'} anchorSituation={'outer'} children={<TempButton title={'outer'}/>} badgeContent={24} {...args}/>
      </Wrapper>
    </div>
  );
}
export const AnchorSituation = AnchorSituationTemplate.bind({});

const MaxTemplate: ComponentStory<typeof Badge> = (args: Omit<BadgeProps, 'children' | 'badgeContent'>) => {
  return (
    <Wrapper title={'Max'}>
      <Badge max={99} children={<TempButton title={'Max'}/>} badgeContent={100} {...args}/>
    </Wrapper>
    );
}
export const Max = MaxTemplate.bind({});

