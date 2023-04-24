import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MultiSelect} from './multi-select';
import {MultiSelectProps} from '../../lib/multi-select/multi-select.props'
import StartAdornmentIcon from "./start-adornment";

const tempList = [
  {
    name: 'one',
    id: 1
  },
  {
    name: 'two',
    id: 2
  },
  {
    name: 'three',
    id: 3
  },
  {
    name: 'four',
    id: 4
  },
  {
    name: 'five',
    id: 5
  },
]


export default {
  title: 'PB Kit/Atoms/Select',
  component: MultiSelect,
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {

  const [select, setSelect] = useState([5, 3])

  const handleChange = (e: any) => {
    setSelect(e)
  }

  return (
    <MultiSelect
      variant={args.variant}
      color={args.color}
      label={args.defaultText}
      placeholder={args.placeholder}
      disabled={args.disabled}
      size={args.size}
      rtl={args.rtl}
      {...args}
      optionsList={tempList}
      id={'id'}
      value={select}
      onChange={handleChange}
      text={'name'}
    />
  )
}

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'primary'}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'secondary'}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'tertiary'}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'info'}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"danger"}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"warning"}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"success"}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"purple"}/>
      <MultiSelect {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"control"}/>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} size={'tiny'} defaultText={'Tiny'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'small'} defaultText={'Small'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'medium'} defaultText={'Medium'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'large'} defaultText={'Large'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'huge'} defaultText={'Huge'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Size = SizeTemplate.bind({});


const RoundedTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} rounded={'full'} defaultText={'full'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'huge'} defaultText={'huge'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'large'} defaultText={'large'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'medium'} defaultText={'medium'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'small'} defaultText={'small'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'tiny'} defaultText={'tiny'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'none'} defaultText={'none'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Rounded = RoundedTemplate.bind({});

const HelperTextTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} helperText={'this is an example for helper text'} defaultText={'helper text'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const HelperText = HelperTextTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} disabled={true} defaultText={'Disabled = True'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} disabled={false} defaultText={'Disabled = False'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} variant={'filled'} defaultText={'Variant = Filled'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} variant={'outlined'} defaultText={'Variant = Outlined'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const StartAdornmentTemplate: ComponentStory<typeof MultiSelect> = (args: MultiSelectProps) => {
  const [select, setSelect] = useState([])

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <MultiSelect {...args} defaultText={'with start adornment'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} StartAdornment={<StartAdornmentIcon/>}/>
    </div>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});