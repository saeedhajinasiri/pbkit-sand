import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Accordion} from './accordion';
import {AccordionDetails} from './accordion-details'
import {AccordionSummary} from './accordion-summary'
import {AccordionProps} from "../../lib/accordion/accordion.props";
import {classNames, Div, Text} from "@pezeshk-book/ui-kit";
import StatAdornmentIcon from './start-adornment'
import {Wrapper} from "../wrapper";
import {TypographyEnum} from "../../types/index";
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
        <AccordionSummary {...args}>
          <Div className={'grow'} dir={"rtl"}>
            <Text
              className={classNames(
                'break-words',
                args.disabled ? 'text-control-200' : 'text-black')
              }
              typography={TypographyEnum[args.size || 'medium']}
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
              typography={TypographyEnum[args.size || 'medium']}
              type={'bold'}>
              {description}
            </Text>
          </Div>
        </AccordionDetails>
      </Accordion>

      <Accordion {...args}>
        <AccordionSummary {...args}>
          <Div className={'grow'} dir={"ltr"}>
            <Text
              className={classNames(
                'break-words',
                args.disabled ? 'text-control-200' : 'text-black')
              }
              typography={TypographyEnum[args.size || 'medium']}
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
              typography={TypographyEnum[args.size || 'medium']}
              type={'bold'}>
              {description}
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
    <div className={'flex flex-col gap-y-8'}>

      <Wrapper className={'w-full'} title={'Primary'}>
        <Accordion color={'primary'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'primary'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Secondary'}>
        <Accordion color={'secondary'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'secondary'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'secondary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Tertiary'}>
        <Accordion color={'tertiary'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'tertiary'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'tertiary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Info'}>
        <Accordion color={'info'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'info'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'info'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Success'}>
        <Accordion color={'success'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'success'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'success'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Warning'}>
        <Accordion color={'warning'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'warning'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'warning'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Danger'}>
        <Accordion color={'danger'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'danger'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'danger'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Purple'}>
        <Accordion color={'purple'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'purple'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'purple'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>


      <Wrapper className={'w-full'} title={'Control'}>
        <Accordion color={'control'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'control'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'control'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Inherit'}>
        <Accordion color={'inherit'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails color={'inherit'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'inherit'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const Color = ColorTemplate.bind({});

const DefaultExpandTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {

  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper className={'w-full'} title={'True Expand'}>
        <Accordion defaultExpanded={true} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'False Expand'}>
        <Accordion defaultExpanded={false} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const DefaultExpand = DefaultExpandTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {
  return (
    <div className={'flex flex-col gap-y-8'}>

      <Wrapper className={'w-full'} title={'Tiny'}>
        <Accordion {...args}>
          <AccordionSummary size={'tiny'} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'tiny']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'tiny']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Small'}>
        <Accordion {...args}>
          <AccordionSummary size={'small'} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'small']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'small']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Medium'}>
        <Accordion {...args}>
          <AccordionSummary size={'medium'} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Large'}>
        <Accordion {...args}>
          <AccordionSummary size={'large'} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'large']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'large']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Huge'}>
        <Accordion {...args}>
          <AccordionSummary size={'huge'} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'huge']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'huge']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const Size = SizeTemplate.bind({});

const RoundedTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {

  return (
    <div className={'flex flex-col gap-y-8'}>

      <Wrapper className={'w-full'} title={'None'}>
        <Accordion rounded={'none'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'none'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Tiny'}>
        <Accordion rounded={'tiny'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'tiny'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Small'}>
        <Accordion rounded={'small'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black',
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'small'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'],
                )}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Medium'}>
        <Accordion rounded={'medium'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'medium'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Large'}>
        <Accordion rounded={'large'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'large'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Huge'}>
        <Accordion rounded={'huge'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'huge'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Full'}>
        <Accordion rounded={'full'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails rounded={'full'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {

  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper className={'w-full'} title={'disabled={true}'}>
        <Accordion disabled={true} {...args}>
          <AccordionSummary disabled={true} {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails disabled={true} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'disabled={false}'}>
        <Accordion {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {

  return (
    <div className={'flex flex-col gap-y-8'}>
      <Wrapper className={'w-full'} title={'Variant: Outlined'}>
        <Accordion variant={'outlined'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails variant={'outlined'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

      <Wrapper className={'w-full'} title={'Variant : Filled'}>
        <Accordion variant={'filled'} {...args}>
          <AccordionSummary {...args}>
            <Div className={'grow'}>
              <Text
                className={classNames(
                  'break-words',
                  args.disabled ? 'text-control-200' : 'text-black')
                }
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {title}
              </Text>
            </Div>
          </AccordionSummary>
          <AccordionDetails variant={'filled'} {...args}>
            <Div>
              <Text
                className={classNames(
                  'break-all',
                  TEXT_COLORS[args.color || 'primary'])}
                typography={TypographyEnum[args.size || 'medium']}
                type={'bold'}>
                {description}
              </Text>
            </Div>
          </AccordionDetails>
        </Accordion>
      </Wrapper>

    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const StartAdornmentTemplate: ComponentStory<typeof Accordion> = (
  {
    title = 'عنوان آکاردئون',
    description = 'محل جایگذاری محتوا',
    ...args
  }: AccordionProps) => {
  return (
    <Accordion {...args}>
      <AccordionSummary StartAdornment={<StatAdornmentIcon/>} {...args}>
        <Div className={'grow'} dir={"rtl"}>
          <Text
            className={classNames(
              'break-words',
              args.disabled ? 'text-control-200' : 'text-black')
            }
            typography={TypographyEnum[args.size || 'medium']}
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
              TEXT_COLORS[args.color || 'primary'])
            }
            typography={TypographyEnum[args.size || 'medium']}
            type={'bold'}>
            {description}
          </Text>
        </Div>
      </AccordionDetails>
    </Accordion>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});