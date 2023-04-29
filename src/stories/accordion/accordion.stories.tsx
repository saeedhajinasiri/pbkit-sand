import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from './accordion';
import {AccordionDetails} from './accordion-details'
import {AccordionSummary} from './accordion-summary'
import {AccordionProps} from "../../lib/accordion/accordion.props";
import Text from "../../lib/text";

const tempIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16.431" height="8.226">
  <path d="M7.5 0a.727.727 0 0 1 .67.423.657.657 0 0 1-.157.746L2.086 6.764a1.973 1.973 0 0 0 0 2.9l5.927 5.595a.658.658 0 0 1 0 .968.756.756 0 0 1-1.026 0L1.06 10.636a3.292 3.292 0 0 1 0-4.84L6.987.2A.748.748 0 0 1 7.5 0z" transform="rotate(-90 4.113 4.113)" fill={"#707070"}/>
</svg>

export default {
  title: 'Components/UI Elements/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <Accordion {...args} expendedColor={'primary'}>
      <AccordionSummary {...args} >
        Accordion Summary
      </AccordionSummary>
      <AccordionDetails>
        Accordion Details
      </AccordionDetails>
    </Accordion>
  )
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

const ColorTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <Accordion {...args}>
        <AccordionSummary color={'primary'} {...args}>
          primary Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          primary Accordion Details
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary color={'secondary'} {...args}>
          secondary Accordion Summary
        </AccordionSummary>
        <AccordionDetails>
          secondary Accordion Details
        </AccordionDetails>
      </Accordion>

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
        <AccordionSummary size={'auto'} {...args}>
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
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const ExpandIconTemplate: ComponentStory<typeof Accordion> = (args: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <Accordion {...args}>
        <AccordionSummary expandIcon={tempIcon} {...args}>
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
      <Accordion {...args} expendedColor={'success'}>
        <AccordionSummary expandIcon={tempIcon} {...args} color={'primary'}>
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
        <AccordionSummary expandIcon={tempIcon} {...args} color={'primary'} rounded={'large'}>
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
