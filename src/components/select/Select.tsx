import * as React from 'react';
import { CustomSelect } from './CustomSelect';
import { NativeSelect } from './NativeSelect';
import { ISelectProps } from './Select.interface';

export const Select: React.FC<ISelectProps> = ({
  items,
  defaultValue = undefined,
  disabled = false,
  size = 'large',
  isNative = false,
  onChange,
}) => {
  if (isNative) {
    return (
      <NativeSelect
        items={items}
        defaultValue={defaultValue}
        disabled={disabled}
        size={size}
        onChange={onChange}
      />
    );
  } else {
    return (
      <CustomSelect
        items={items}
        defaultValue={defaultValue}
        disabled={disabled}
        size={size}
        onChange={onChange}
      />
    );
  }
};
