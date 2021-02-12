import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/down-arrow.svg';
import { Options } from './Options';
import { IOption, ISelectProps } from './Select.interface';
import { Selectbox, SelectWrapper } from './Select.style';
import { initValue } from './utils';

export function CustomSelect({
  items,
  defaultValue,
  disabled = false,
  onChange,
}: ISelectProps) {
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
    return selected.name;
  }, [selected]);

  return (
    <SelectWrapper>
      <Selectbox isOpen={open} disabled={disabled} onClick={onClickSelectbox}>
        <span>{displayName}</span>
        <ArrowIcon />
      </Selectbox>

      <Options
        isOpen={open}
        items={items}
        defaultValue={defaultValue}
        selectedValue={selected.value}
        onChangeItem={onChangeItem}
      />
    </SelectWrapper>
  );
}
