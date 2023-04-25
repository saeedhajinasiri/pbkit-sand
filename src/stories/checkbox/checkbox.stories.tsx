import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Checkbox} from './checkbox';
import {CheckboxProps} from "../../lib/checkbox/checkbox.props";
import {FormControlLabel} from "../form-control-label/form-control-label";

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => <FormControlLabel label={'Default Checkbox'}><Checkbox {...args} /></FormControlLabel>;

export const Default = Template.bind({});

const ColorTemplate: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return (
    <div className={'grid grid-cols-3 gap-8 justify-between'}>
      <FormControlLabel label={'Primary'}>
        <Checkbox checked={true} color={'primary'} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Secondary'}>
        <Checkbox checked={true} color={'secondary'} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Tertiary'}>
        <Checkbox checked={true} color={'tertiary'} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Info'}>
        <Checkbox checked={true} color={'info'} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Danger'}>
        <Checkbox checked={true} color={"danger"} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Warning'}>
        <Checkbox checked={true} color={"warning"} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Success'}>
        <Checkbox checked={true} color={"success"} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Control'}>
        <Checkbox checked={true} color={"control"} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Purple'}>
        <Checkbox checked={true} color={"purple"} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Inherit'}>
        <Checkbox checked={true} color={"inherit"} {...args} />
      </FormControlLabel>
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return (
    <div className={'grid grid-cols-3 gap-4 w-full justify-between'}>
      <FormControlLabel label={'Tiny'}>
        <Checkbox size={'tiny'} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Small'}>
        <Checkbox size={'small'} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Medium'}>
        <Checkbox size={'medium'} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Large'}>
        <Checkbox size={'large'} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Huge'}>
        <Checkbox size={'huge'} checked={true} {...args} />
      </FormControlLabel>
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const CheckedTemplate: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return (
    <div className={'grid grid-cols-2 gap-4 w-full justify-between'}>
      <FormControlLabel label={'Checked = True'}>
        <Checkbox checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel label={'Checked = False'}>
        <Checkbox checked={false} {...args} />
      </FormControlLabel>
    </div>
  );
}
export const Checked = CheckedTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return (
    <div className={'grid grid-cols-2 gap-4 w-full'}>
      <FormControlLabel disabled={true} label={'disabled = True'}>
        <Checkbox disabled={true} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel disabled={false} label={'disabled = False'}>
        <Checkbox disabled={false} checked={true} {...args} />
      </FormControlLabel>
      <FormControlLabel disabled={true} label={'disabled = True'}>
        <Checkbox disabled={true} checked={false} {...args} />
      </FormControlLabel>
      <FormControlLabel disabled={false} label={'disabled = False'}>
        <Checkbox disabled={false} checked={false} {...args} />
      </FormControlLabel>
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});
