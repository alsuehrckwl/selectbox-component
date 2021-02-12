import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/down-arrow.svg';
import { useClickAwayListner } from '../../hooks';
import { Options } from './Options';
import { IOption, ISelectProps } from './Select.interface';
import { Selectbox, SelectWrapper } from './Select.style';
import { initValue } from './utils';

export function CustomSelect({
  items,
  defaultValue,
  disabled = false,
  size = 'large',
  onChange,
}: ISelectProps) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const selectboxRef = React.useRef<HTMLDivElement | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<IOption>(
    initValue(defaultValue, items)
  );

  const onClickSelectbox = () => {
    if (!disabled) toggleOpen(!open);
  };

  const onChangeItem = (value: IOption) => {
    setSelected(value);

    if (onChange) {
      onChange(selected);
    }

    onClickSelectbox();
  };

  const displayName = React.useMemo(() => {
    return items.length > 0 ? selected.name : '';
  }, [selected, items]);

  useClickAwayListner(open, wrapperRef, selectboxRef, onClickSelectbox);

  return (
    <SelectWrapper ref={wrapperRef}>
      <Selectbox
        isOpen={open}
        disabled={disabled}
        onClick={onClickSelectbox}
        size={size}
        ref={selectboxRef}>
        <span>{displayName}</span>
        <ArrowIcon />
      </Selectbox>

      <Options
        isOpen={open}
        items={items}
        size={size}
        defaultValue={defaultValue}
        selectedValue={selected.value}
        onChangeItem={onChangeItem}
      />
    </SelectWrapper>
  );
}
