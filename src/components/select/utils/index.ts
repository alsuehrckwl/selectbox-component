import { IOption } from '../Select.interface';

export function initValue(
  defaultValue: string | number | undefined,
  items: IOption[]
) {
  if (items.length === 0) return { id: 0, name: '', value: '' };

  if (!!defaultValue) {
    return items.filter((item) => item.value === defaultValue)[0];
  } else {
    return items[0];
  }
}
