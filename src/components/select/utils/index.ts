import { IOption } from '../Select.interface';

export function initValue(
  defaultValue: string | number | undefined,
  items: IOption[]
) {
  if (!!defaultValue) {
    return items.filter((item) => item.value === defaultValue)[0];
  } else {
    return items[0];
  }
}
