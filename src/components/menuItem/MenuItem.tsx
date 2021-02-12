import * as React from 'react';
import { IProps } from './MenuItem.interface';
import { Menu } from './MenuItem.style';

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
