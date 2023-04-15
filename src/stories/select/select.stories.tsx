import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from './select';
import {SelectProps} from '../../lib/select/select.props'
import StartAdornmentIcon from "../../lib/select/StartAdornment";

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
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => {

  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }

  return (
    <Select
      variant={args.variant}
      color={args.color}
      defaultText={args.defaultText}
      disabled={args.disabled}
      size={args.size}
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

const ColorTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'grid grid-cols-2 gap-3'}>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'primary'}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'secondary'}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'tertiary'}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={'info'}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"danger"}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"warning"}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"success"}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"purple"}/>
      <Select {...args} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} color={"control"}/>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <Select {...args} size={'tiny'} defaultText={'Tiny'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} size={'small'} defaultText={'Small'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} size={'medium'} defaultText={'Medium'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} size={'large'} defaultText={'Large'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} size={'huge'} defaultText={'Huge'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <Select {...args} disabled={true} defaultText={'Disabled = True'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} disabled={false} defaultText={'Disabled = False'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <Select {...args} variant={'filled'} defaultText={'Variant = Filled'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <Select {...args} variant={'outlined'} defaultText={'Variant = Outlined'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const StartAdornmentTemplate: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [select, setSelect] = useState('')

  const handleChange = (e: any) => {
    setSelect(e)
  }
  return (
    <div className={'flex flex-col gap-8'}>
      <Select {...args} defaultText={'with start adornment'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} StartAdornment={<StartAdornmentIcon/>}/>
    </div>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});

