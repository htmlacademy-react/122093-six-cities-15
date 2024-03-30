import { useEffect } from 'react';

export default function useEscapeKeydown (isOpened: boolean, close: () => void) {
  useEffect(() => {
    if (isOpened) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          close();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  });
}
