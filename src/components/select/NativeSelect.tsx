import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/down-arrow.svg';
import { IOption, ISelectProps } from './Select.interface';
import { SelectWrapper } from './Select.style';

export function NativeSelect({
  items,
  defaultValue,
  disabled = false,
  onChange,
}: ISelectProps) {
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = items.filter((item) => item.value === event.target.value)[0];

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectWrapper>
      <select
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChangeSelect}>
        {items.length > 0 &&
          items.map((item: IOption) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
      <ArrowIcon className="native-select-icon" />
    </SelectWrapper>
  );
}
