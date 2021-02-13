import * as React from 'react';

interface IKeyDown {
  open: boolean;
  args: number[];
}

export const useKeyDown = ({ open, args }: IKeyDown) => {
  const [code, setCode] = React.useState<number | null>(null);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { keyCode } = event;

      if (args.some(item => item === keyCode)) {
        setCode(keyCode);
      }
    }

    if (open) document.addEventListener('keydown', onKeyDown);

    return () => {
      if (open) document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, args, code, setCode])

  const clear = () => {
    setCode(null);
  }

  return {code, clear};
}