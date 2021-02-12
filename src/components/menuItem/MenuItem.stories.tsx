import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import MenuItem from '.';
import { IProps } from './MenuItem.interface';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story<IProps> = (args) => <MenuItem {...args} />;

export const Selected = Template.bind({});

Selected.args = {
  item: { id: 1, name: 'menu', value: '1' },
  selectedValue: '1',
  defaultValue: '1',
};

export const NoneSelected = Template.bind({});

NoneSelected.args = {
  item: { id: 1, name: 'menu', value: '1' },
  selectedValue: '2',
  defaultValue: '2',
};

export const Disabled = Template.bind({});

Disabled.args = {
  item: { id: 1, name: 'menu', value: '1', disabled: true },
  selectedValue: '2',
  defaultValue: '2',
};
