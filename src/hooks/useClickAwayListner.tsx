import * as React from 'react';

interface IRef {
  current: HTMLDivElement | null;
}

export const useClickAwayListner = (
  open: boolean,
  parentEl: IRef,
  childEl: IRef,
  close: any
) => {
  React.useEffect(() => {
    const onClick = (event: MouseEvent | TouchEvent) => {
      const { target } = event;
      const targetEl: HTMLDivElement = target as HTMLDivElement;

      if (parentEl.current && !parentEl.current.contains(targetEl)) {
        if (childEl.current && !childEl.current.contains(targetEl)) {
          close();
        }
      }
    };

    if (open) document.addEventListener('click', onClick, true);

    return () => {
      if (open) document.removeEventListener('click', onClick);
    };
  }, [open, parentEl, childEl, close]);
};
