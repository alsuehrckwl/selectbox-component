import * as React from 'react';
import { IProps } from './MenuItem.interface';
import { Menu } from './MenuItem.style';

export const MenuItem: React.FC<IProps> = ({
  item,
  selectedValue,
  defaultValue,
  onClickMenuItem,
  keyDownId,
}) => {
  const menuRef = React.useRef<HTMLLIElement | null>(null);
  const { id, name, value, disabled = false } = item;
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

  const checkFocus = React.useMemo(() => {
    if (id === keyDownId) {
      return !disabled;
    } else {
      return false;
    }
  }, [keyDownId, id, disabled]);

  React.useEffect(() => {
    if (checkFocus) {
      if (menuRef.current) {
        menuRef.current.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [checkFocus, menuRef]);

  return (
    <Menu
      onClick={onClickMenu}
      disabled={disabled}
      selected={isSelected}
      focused={checkFocus}
      ref={menuRef}>
      <span>{name}</span>
    </Menu>
  );
};
