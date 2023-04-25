import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MultiSelect} from './multi-select';
import {MultiSelectProps} from '../../lib/multi-select/multi-select.props'
import StartAdornmentIcon from "./start-adornment";

const tempList = [
  {
    name: 'یک',
    id: 1
  },
  {
    name: 'دو',
    id: 2
  },
  {
    name: 'سه',
    id: 3
  },
  {
    name: 'چهار',
    id: 4
  },
  {
    name: 'پنج',
    id: 5
  },
]


export default {
  title: 'PB Kit/Atoms/Select',
  component: MultiSelect,
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'optionsList' | 'value'>) => {

  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }

  return (
    <MultiSelect
      optionsList={tempList}
      value={select}
      {...args}
      onChange={handleChange}
    />
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <MultiSelect optionsList={tempList} value={select} color={'primary'} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={'secondary'} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={'tertiary'} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={'info'} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={"danger"} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={"warning"} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={"success"} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={"purple"} {...args} onChange={handleChange}/>
      <MultiSelect optionsList={tempList} value={select} color={"control"} {...args} onChange={handleChange}/>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect size={'tiny'} label={'خیلی کوچک'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect size={'small'} label={'کوچک'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect size={'medium'} label={'متوسط'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect size={'large'} label={'بزرگ'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect size={'huge'} label={'خیلی بزرگ'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
    </div>
  );
}
export const Size = SizeTemplate.bind({});


const RoundedTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect rounded={'full'} label={'کامل'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'huge'} label={'خیلی بزرگ'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'large'} label={'بزرگ'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'medium'} label={'متوسط'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'small'} label={'کوچک'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'tiny'} label={'خیلی کوچک'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect rounded={'none'} label={'هیچی'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});

const HelperTextTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect helperText={'این یک مثال برای این قسمت است'} label={'متن پیش فرض'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
    </div>
  );
}
export const HelperText = HelperTextTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect disabled={true} label={'غیرفعال'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect disabled={false} label={'فعال'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect variant={'filled'} label={'Variant = Filled'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
      <MultiSelect variant={'outlined'} label={'Variant = Outlined'} optionsList={tempList} value={select} {...args} onChange={handleChange}/>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const StartAdornmentTemplate: ComponentStory<typeof MultiSelect> = (args: Omit<MultiSelectProps, 'value' | 'optionsList'>) => {
  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e: number[]): void => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect label={'آیکون سفارشی'} optionsList={tempList} value={select} StartAdornment={<StartAdornmentIcon/>} {...args} onChange={handleChange}/>
    </div>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});