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
  keyDownId,
}: IOptionsProps) {
  if (!isOpen) return null;

  if (items.length > 0) {
    return (
      <OptionsWrapper size={size}>
        {items.map((item: IOption) => (
          <MenuItem
            key={item.id}
            item={item}
            defaultValue={defaultValue}
            selectedValue={selectedValue}
            onClickMenuItem={onChangeItem}
            keyDownId={keyDownId}
          />
        ))}
      </OptionsWrapper>
    );
  } else {
    return null;
  }
}
