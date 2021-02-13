import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/down-arrow.svg';
import { useClickAwayListner, useKeyDown } from '../../hooks';
import { Options } from './Options';
import { IOption, ISelectProps } from './Select.interface';
import { Selectbox, SelectWrapper } from './Select.style';
import { getNext, getPrev, initValue } from './utils';

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
  const [keyDownId, setKeyDownId] = React.useState(selected.id);

  const onClickSelectbox = () => {
    if (!disabled) toggleOpen(!open);
  };

  const onChangeItem = (value: IOption) => {
    if (value.id !== selected.id) {
      setSelected(value);

      if (onChange) {
        setKeyDownId(value.id);
        onChange(value);
      }
    }

    onClickSelectbox();
  };

  const displayName = React.useMemo(() => {
    return items.length > 0 ? selected.name : '';
  }, [selected, items]);

  const codeChangeCallback = (code: number) => {
    if (code) {
      if (code === 13 || code === 32) {
        onChangeItem(items.filter((item) => item.id === keyDownId)[0]);
      } else if (code === 27) {
        onClickSelectbox();
      } else if (code === 40) {
        setKeyDownId(getNext(keyDownId, items));
      } else if (code === 38) {
        setKeyDownId(getPrev(keyDownId, items));
      }
    }
  };

  useKeyDown({
    open,
    codes: [13, 32, 40, 38, 27],
    callback: codeChangeCallback,
  });

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
        keyDownId={keyDownId}
      />
    </SelectWrapper>
  );
}
