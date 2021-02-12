import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Select from '.';
import { ISelectProps } from './Select.interface';
import { Select1 } from '../../common/constants';

export default {
  title: 'Example/Select',
  component: Select,
} as Meta;

const Template: Story<ISelectProps> = (args) => (
  <div style={{ width: 200 }}>
    <Select {...args} />
  </div>
);

export const Large = Template.bind({});

Large.args = {
  items: Select1,
  defaultValue: 'a',
  size: 'large',
};

export const Medium = Template.bind({});

Medium.args = {
  items: Select1,
  defaultValue: 'a',
  size: 'medium',
};

export const Small = Template.bind({});

Small.args = {
  items: Select1,
  defaultValue: 'a',
  size: 'small',
};

export const Disabled = Template.bind({});

Disabled.args = {
  items: Select1,
  defaultValue: 'a',
  size: 'large',
  disabled: true,
};

export const Native = Template.bind({});

Native.args = {
  items: Select1,
  defaultValue: 'a',
  size: 'large',
  isNative: true,
};
