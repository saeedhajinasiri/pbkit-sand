import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Text} from './text';
import {Div} from '../div/div';
import {TextProps} from "../../lib/text/text.props";
import {Wrapper} from "../wrapper";

const {fontSizes} = require('../../config/typography/font-sizes');
const {lineHeights} = require('../../config/typography/line-heights');

const childrenText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

export default {
  title: 'Components/UI Elements/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => <Text children={childrenText} {...args}/>;

export const Default = Template.bind({});
Default.args = {};

const ColorTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Wrapper title={'Primary'}>
        <Text color={'primary'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Secondary'}>
        <Text color={'secondary'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Tertiary'}>
        <Text color={'tertiary'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Info'}>
        <Text color={'info'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Danger'}>
        <Text color={"danger"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Warning'}>
        <Text color={"warning"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Success'}>
        <Text color={"success"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Purple'}>
        <Text color={"purple"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Control'}>
        <Text color={"control"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.100'}>
        <Text color={"grey.100"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.200'}>
        <Text color={"grey.200"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.300'}>
        <Text color={"grey.300"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.400'}>
        <Text color={"grey.400"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.500'}>
        <Text color={"grey.500"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.600'}>
        <Text color={"grey.600"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.700'}>
        <Text color={"grey.700"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.800'}>
        <Text color={"grey.800"} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'grey.900'}>
        <Text color={"grey.900"} children={childrenText} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Color = ColorTemplate.bind({
  children: childrenText
});

const TypographyTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  const mobileSize = (type: string) => {
    return (
      `mobile: font-size = ${parseFloat(fontSizes[type]) * 16}px (${fontSizes[type]}) / line-height = ${parseFloat(lineHeights[type]) * 16}px (${lineHeights[type]})`
    )
  }
  const tabletSize = (type: string) => {
    return (
      `tablet: font-size = ${parseFloat(fontSizes[type]) * 16}px (${fontSizes[type]}) / line-height = ${parseFloat(lineHeights[type]) * 16}px (${lineHeights[type]})`
    )
  }
  const desktopSize = (type: string) => {
    return (
      `desktop: font-size = ${parseFloat(fontSizes[type]) * 16}px (${fontSizes[type]}) / line-height = ${parseFloat(lineHeights[type]) * 16}px (${lineHeights[type]})`
    )
  }

  return (
    <div className={'flex flex-col gap-10'}>
      <Div className={'flex-col'}>
        <Wrapper title={'xxxs'}>
          <Text typography={'xxxs'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xxxs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xxxs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xxxs')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'xxs'}>
          <Text typography={'xxs'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xxs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xxs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xxs')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'xs'}>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xs')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xs')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'sm'}>
          <Text typography={'sm'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-sm')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-sm')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-sm')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'base'}>
          <Text typography={'base'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-base')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-base')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-base')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'lg'}>
          <Text typography={'lg'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-lg')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-lg')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-lg')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'xl'}>
          <Text typography={'xl'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xl')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'xxl'}>
          <Text typography={'xxl'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xxl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xxl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xxl')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'xxxl'}>
          <Text typography={'xxxl'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-xxxl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-xxxl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-xxxl')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'4xl'}>
          <Text typography={'4xl'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-4xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-4xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-4xl')}
          </Text>
        </fieldset>
      </Div>
      <Div className={'flex-col'}>
        <Wrapper title={'5xl'}>
          <Text typography={'5xl'} className={'whitespace-nowrap'} align={'left'} children={childrenText} {...args}/>
        </Wrapper>
        <fieldset className="border border-control-300 rounded p-4 bg-control-100">
          <legend className="px-4">Features</legend>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {mobileSize('m-5xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {tabletSize('t-5xl')}
          </Text>
          <Text typography={'xs'} className={'whitespace-nowrap'} align={'left'} {...args}>
            {desktopSize('d-5xl')}
          </Text>
        </fieldset>
      </Div>
    </div>
  );
}
export const Typography = TypographyTemplate.bind({});

const TypeTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Wrapper title={'Light'}>
        <Text type={'light'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Regular'}>
        <Text type={'regular'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Medium'}>
        <Text type={'medium'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Bold'}>
        <Text type={'bold'} children={childrenText} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Type = TypeTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Wrapper title={'p'}>
        <Text variant={'p'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'body'}>
        <Text variant={'body'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'span'}>
        <Text variant={'span'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'caption'}>
        <Text variant={'caption'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h1'}>
        <Text variant={'h1'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h2'}>
        <Text variant={'h2'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h3'}>
        <Text variant={'h3'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h4'}>
        <Text variant={'h4'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h5'}>
        <Text variant={'h5'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'h6'}>
        <Text variant={'h6'} children={childrenText} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const AlignTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Wrapper title={'Right'}>
        <Text className={'w-full'} align={'right'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Left'}>
        <Text className={'w-full'} align={'left'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Center'}>
        <Text align={'center'} className={'w-full'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'End'}>
        <Text align={'end'} className={'w-full'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Start'}>
        <Text align={'start'} className={'w-full'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Justify'}>
        <Text align={'justify'} className={'w-full'} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Inherit'}>
        <Text align={'inherit'} className={'w-full'} children={childrenText} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Align = AlignTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Text> = (args: Omit<TextProps, 'children'>) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Wrapper title={'Disabled = True'}>
        <Text disabled={true} children={childrenText} {...args}/>
      </Wrapper>
      <Wrapper title={'Disabled = False'}>
        <Text disabled={false} children={childrenText} {...args}/>
      </Wrapper>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});
