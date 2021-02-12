import { IOption } from '../select/Select.interface';

export interface IProps {
  item: IOption;
  selectedValue: string | number | undefined;
  defaultValue: string | number | undefined;
  onClickMenuItem?: (item: IOption) => void;
}

export interface IMenuProps {
  selected: boolean;
  disabled: boolean;
}
