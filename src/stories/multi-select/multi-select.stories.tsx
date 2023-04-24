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

  const [select, setSelect] = useState<number[]>([])

  const handleChange = (e:number[]) => {
    setSelect(e)
  }

  return (
    <MultiSelect
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
      <MultiSelect {...args} size={'tiny'} label={'Tiny'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'small'} label={'Small'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'medium'} label={'Medium'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'large'} label={'Large'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} size={'huge'} label={'Huge'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
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
      <MultiSelect {...args} rounded={'full'} label={'full'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'huge'} label={'huge'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'large'} label={'large'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'medium'} label={'medium'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'small'} label={'small'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'tiny'} label={'tiny'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} rounded={'none'} label={'none'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
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
      <MultiSelect {...args} helperText={'this is an example for helper text'} label={'helper text'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
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
      <MultiSelect {...args} disabled={true} label={'Disabled = True'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} disabled={false} label={'Disabled = False'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
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
      <MultiSelect {...args} variant={'filled'} label={'Variant = Filled'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
      <MultiSelect {...args} variant={'outlined'} label={'Variant = Outlined'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'}/>
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
      <MultiSelect {...args} label={'with start adornment'} optionsList={tempList} id={'id'} value={select} onChange={handleChange} text={'name'} StartAdornment={<StartAdornmentIcon/>}/>
    </div>
  );
}
export const StartAdornment = StartAdornmentTemplate.bind({});