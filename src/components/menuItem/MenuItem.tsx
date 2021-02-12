import * as React from 'react';
import styled, { css } from 'styled-components';
import { IOption } from '../select/Select.interface';

interface IProps {
  item: IOption;
  selectedValue: string | number | undefined;
  defaultValue: string | number | undefined;
  disabled: boolean;
  onClickMenuItem?: (item: IOption) => void;
}

interface IMenuProps {
  selected: boolean;
  disabled: boolean;
}

const Menu = styled.li<IMenuProps>`
  height: 100%;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(props) => (props.selected ? '#f3f3f3' : 'transparent')};

  &:hover {
    background-color: #eaf8ff;
    cursor: pointer;
  }

  span {
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f7f7f7;

      &:hover {
        background-color: #f7f7f7;
        cursor: default;
      }

      span {
        color: #cecece;
      }
    `}
`;

export const MenuItem: React.FC<IProps> = ({
  item,
  selectedValue,
  defaultValue,
  onClickMenuItem,
}) => {
  const { name, value, disabled = false } = item;
  const [isSelected, setSelected] = React.useState(false);

  React.useEffect(() => {
    if (selectedValue !== defaultValue) {
      if (selectedValue === value) setSelected(true);
    } else {
      if (defaultValue === value) setSelected(true);
    }
  }, [defaultValue, selectedValue, value]);

  const onClickMenu = () => {
    if (disabled) return;

    if (typeof onClickMenuItem === 'function') {
      onClickMenuItem(item);
    } else {
      return;
    }
  };

  return (
    <Menu onClick={onClickMenu} disabled={disabled} selected={isSelected}>
      <span>{name}</span>
    </Menu>
  );
};
