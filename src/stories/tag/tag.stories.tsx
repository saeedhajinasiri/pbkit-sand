import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tag} from './tag';
import {TagProps} from '../../lib/tag/tag.props'
import {Div, Text} from "@pezeshk-book/ui-kit";

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

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'primary'} typography={'base'}>
          Primary :
        </Text>
        <Tag color={'primary'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'secondary'} typography={'base'}>
          Secondary :
        </Text>
        <Tag color={'secondary'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'tertiary'} typography={'base'}>
          Tertiary :
        </Text>
        <Tag color={'tertiary'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'info'} typography={'base'}>
          Info :
        </Text>
        <Tag color={'info'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'danger'} typography={'base'}>
          Danger :
        </Text>
        <Tag color={'danger'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'warning'} typography={'base'}>
          Warning :
        </Text>
        <Tag color={'warning'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'success'} typography={'base'}>
          Success :
        </Text>
        <Tag color={'success'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'purple'} typography={'base'}>
          Purple :
        </Text>
        <Tag color={'purple'} {...args} />
      </Div>

      <Div className={'flex items-center gap-x-4'}>
        <Text color={'control'} typography={'base'}>
          Control :
        </Text>
        <Tag color={'control'} {...args} />
      </Div>

    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Tag> = (args: TagProps) => {


  return (
    <div className={'flex flex-col gap-8'}>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>
          اندازه تگ : خیلی کوچک
        </Text>
        <Tag size={'tiny'} {...args} />
      </Div>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>
          اندازه تگ : کوچک
        </Text>
        <Tag size={'small'} {...args} />
      </Div>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>
          اندازه تگ : متوسط
        </Text>
        <Tag size={'medium'} {...args} />
      </Div>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>
          اندازه تگ : بزرگ
        </Text>
        <Tag size={'large'} {...args} />
      </Div>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>
          اندازه تگ : خیلی بزرگ
        </Text>
        <Tag size={'huge'} {...args} />
      </Div>

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
      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>filled : </Text>
        <Tag variant={'filled'} {...args} />
      </Div>

      <Div className={'flex gap-x-4 items-center'}>
        <Text typography={'base'}>outlined : </Text>
        <Tag variant={'outlined'} {...args} />
      </Div>

    </div>
  );
}
export const Variant = VariantTemplate.bind({});


