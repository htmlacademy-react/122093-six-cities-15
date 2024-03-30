import { useState } from 'react';

export default function useBoolean(initialValue: boolean = false) {
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  const on = () => setIsOn(true);
  const off = () => setIsOn(false);
  const toggle = () => setIsOn((prev) => !prev);

  return {
    isOn,
    on,
    off,
    toggle,
  };
}
