import * as React from 'react';
import styled from 'styled-components';
import MenuItem from '../menuItem';
import { IOption } from './Select.interface';

interface IProps {
  isOpen: boolean;
  items: Array<IOption>;
  defaultValue?: string | number | undefined;
  selectedValue: string | number | undefined;
  onChangeItem?: (item: IOption) => void;
}

const OptionsWrapper = styled.ul`
  z-index: 1;
  position: absolute;
  top: 34px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
  padding: 8px 0px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.1);
`;

export function Options({
  isOpen,
  items,
  defaultValue,
  selectedValue,
  onChangeItem,
}: IProps) {
  if (!isOpen) return null;

  if (items.length > 0) {
    return (
      <OptionsWrapper>
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
