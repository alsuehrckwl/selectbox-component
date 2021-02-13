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

export function getNext(currentId: number | string, items: IOption[]) {
  const max = items.length;
  const curIdx = items.findIndex((item) => item.id === currentId);
  const startIdx = curIdx + 1;
  let conut = 1;

  for (let i = startIdx; i < max; i++) {
    if (items[i].disabled) {
      conut++;

      continue;
    } else {
      break;
    }
  }

  const nextIdx = curIdx + conut;

  if (nextIdx >= max) {
    if (items[max - 1].disabled) {
      return currentId;
    } else {
      return items[max - 1].id;
    }
  } else {
    return items[nextIdx].id;
  }
}

export function getPrev(currentId: number | string, items: IOption[]) {
  const min = 0;
  const curIdx = items.findIndex((item) => item.id === currentId);
  let prevIdx = curIdx - 1;

  for (let i = curIdx - 1; i > min; i--) {
    if (items[i].disabled) {
      prevIdx--;

      continue;
    } else {
      break;
    }
  }

  if (prevIdx <= min) {
    if (items[0].disabled) {
      return currentId;
    } else {
      return items[0].id;
    }
  } else {
    return items[prevIdx].id;
  }
}
