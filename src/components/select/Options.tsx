import * as React from 'react';
import MenuItem from '../menuItem';
import { IOption, IOptionsProps } from './Select.interface';
import { OptionsWrapper } from './Select.style';

export function Options({
  isOpen,
  items,
  size,
  defaultValue,
  selectedValue,
  onChangeItem,
}: IOptionsProps) {
  if (!isOpen) return null;

  if (items.length > 0) {
    return (
      <OptionsWrapper size={size}>
        {items.map((item: IOption) => (
          <MenuItem
            key={item.id}
            item={item}
            disabled={false}
            defaultValue={defaultValue}
            selectedValue={selectedValue}
            onClickMenuItem={onChangeItem}
          />
        ))}
      </OptionsWrapper>
    );
  } else {
    return null;
  }
}
