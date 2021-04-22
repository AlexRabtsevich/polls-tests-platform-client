import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onToggle = useCallback(() => setIsToggle((prev) => !prev), []);

  return [isToggle, onToggle] as const;
};
