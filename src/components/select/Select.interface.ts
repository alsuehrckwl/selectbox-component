export interface IOption {
  id: number | null;
  name: string;
  value: string | number;
  disabled?: boolean;
}

export interface ISelectProps {
  items: Array<IOption>;
  onChange?: (value: IOption) => void;
  disabled?: boolean;
  defaultValue?: string | number | undefined;
  size?: string;
  isNative?: boolean;
}

export interface ISelectboxProps {
  isOpen: boolean;
  disabled: boolean;
  size: string;
}

export interface IOptionsProps {
  isOpen: boolean;
  size: string;
  items: Array<IOption>;
  defaultValue?: string | number | undefined;
  selectedValue: string | number | undefined;
  onChangeItem?: (item: IOption) => void;
}
