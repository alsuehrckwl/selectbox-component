import * as React from 'react';

interface IKeyDown {
  open: boolean;
  codes: number[];
  callback: (code: number) => void;
}

export const useKeyDown = ({ open, codes, callback }: IKeyDown) => {
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { keyCode } = event;

      if (codes.some((item) => item === keyCode)) {
        callback(keyCode);
      }
    };

    if (open) document.addEventListener('keydown', onKeyDown);

    return () => {
      if (open) document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, codes, callback]);
};
