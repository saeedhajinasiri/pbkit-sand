import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from './accordion';
import {AccordionDetails} from './accordion-details'
import {AccordionSummary} from './accordion-summary'
import {AccordionProps} from "../../lib/accordion/accordion.props";
import {classNames, Div, Text} from "@pezeshk-book/ui-kit";
import StatAdornmentIcon from './start-adornment'
import {Wrapper} from "../wrapper";
import {summaryTypography} from "../../lib/accordion/accordion.style";
import {TEXT_COLORS} from "../../lib/accordion/accordion-summary/accordion-summary.style";

export default {
  title: 'Components/UI Elements/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {

  return (
    <>
      <Accordion {...args}>
        <AccordionSummary {...args} >
          <Div className={'grow'} dir={"rtl"}>
            <Text
              className={classNames(
                'break-words',
                args.disabled ? 'text-control-200' : 'text-black')}
              typography={summaryTypography[args.size || 'medium']}
              type={'bold'}>
              {title}
            </Text>
          </Div>
        </AccordionSummary>
        <AccordionDetails {...args}>
          <Div dir={'rtl'}>
            <Text
              className={classNames(
                'break-all',
                TEXT_COLORS[args.color || 'primary'])}
              typography={summaryTypography[args.size || 'medium']}
              type={'bold'}>
              {description || 'محل جایگذاری محتوا'}
            </Text>
          </Div>
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary {...args} >
          <Div className={'grow'} dir={"ltr"}>
            <Text
              className={classNames(
                'break-words',
                args.disabled ? 'text-control-200' : 'text-black')}
              typography={summaryTypography[args.size || 'medium']}
              type={'bold'}>
              {title}
            </Text>
          </Div>
        </AccordionSummary>
        <AccordionDetails {...args}>
          <Div dir={'ltr'}>
            <Text
              className={classNames(
                'break-all',
                TEXT_COLORS[args.color || 'primary'])}
              typography={summaryTypography[args.size || 'medium']}
              type={'bold'}>
              {description || 'محل جایگذاری محتوا'}
            </Text>
          </Div>
        </AccordionDetails>
      </Accordion>
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

const ColorTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-y-4'}>
      <Wrapper className={'w-full'} title={'Primary'}>
        <Accordion color={'danger'} {...args}>
          <AccordionSummary {...args} >
            <Div className={'grow flex justify-end'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')}
                typography={summaryTypography[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'danger'} {...args}>
            <Div className={'flex justify-end'}>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'danger'])}
                typography={summaryTypography[args.size || 'medium']}
                type={'bold'}>
                {description || 'محل جایگذاری محتوا'}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Secondary'}>
        <Accordion {...args}>
          <AccordionSummary color={'warning'} {...args}>
            <Div className={'grow flex justify-end'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')}
                typography={summaryTypography[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails>
            {description}
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Accordion {...args}>
        <AccordionSummary color={'tertiary'} {...args}>
          tertiary Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          tertiary Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'info'} {...args}>
          info Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          info Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'danger'} {...args}>
          danger Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          danger Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'warning'} {...args}>
          warning Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          warning Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'success'} {...args}>
          success Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          success Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'control'} {...args}>
          control Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          control Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'purple'} {...args}>
          purple Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          purple Accordion Details
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const DefaultExpandTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col row gap-8'}>
      <div className={'flex gap-2 w-full'}>
        <p className={'whitespace-nowrap'}>defaultExpand = True : </p>
        <Accordion className={'w-full'} {...args} defaultExpanded={true}>
          <AccordionSummary {...args}>
            Accordion Summary
          </AccordionSummary>
          <AccordionDetails>
            Accordion Details
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'flex gap-2 w-full'}>
        <p className={'whitespace-nowrap'}>defaultExpand = False : </p>
        <Accordion className={'w-full'} {...args} defaultExpanded={false}>
          <AccordionSummary {...args}>
            Accordion Summary
          </AccordionSummary>
          <AccordionDetails>
            Accordion Details
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export const DefaultExpand = DefaultExpandTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <Accordion {...args}>
        <AccordionSummary size={'tiny'} {...args}>
          Auto Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary size={'small'} {...args}>
          Small Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary size={'medium'} {...args}>
          Medium Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary size={'large'} {...args}>
          Large Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
      <Wrapper title={'Huge'}>
        <Accordion {...args}>
          <AccordionSummary size={'huge'} {...args}>
            Large Accordion Summary
          </AccordionSummary>
          <AccordionDetails>
            Accordion Details
          </AccordionDetails>
        </Accordion>
      </Wrapper>
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const ExpandIconTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Accordion {...args}>
        <AccordionSummary {...args}>
          Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export const ExpandIcon = ExpandIconTemplate.bind({});

const ExpandColorTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Accordion {...args} color={'success'}>
        <AccordionSummary color={'primary'} {...args}>
          Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          <Text>
            Accordion Details
          </Text>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export const ExpandColor = ExpandColorTemplate.bind({});

const RoundedTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Accordion {...args} rounded={'large'}>
        <AccordionSummary color={'primary'} rounded={'large'} {...args}>
          Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          Accordion Details
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});


const StartAdornmentTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Accordion {...args} rounded={'large'}>
        <AccordionSummary StartAdornment={<StatAdornmentIcon/>} {...args} color={'primary'} rounded={'large'}>
          <Text align={'right'}>آکارديون ۳</Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text align={'right'}>جزییات محتوا</Text>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});