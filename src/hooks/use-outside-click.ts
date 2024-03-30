import { MutableRefObject, useEffect } from 'react';

export default function useOutsideClick (isOpened: boolean, close: () => void, containerRef: MutableRefObject<HTMLElement | null>) {
  useEffect(() => {
    if (isOpened) {
      const handleOutsideClick = (evt: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(evt.target as Node)) {
          close();
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  });
}
