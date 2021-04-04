import { useCallback, useState } from 'react';

export const useFocusElement = (defaultValue = false) => {
  const [isFocusedElement, setIsFocusedElement] = useState<boolean>(defaultValue);

  const onFocusElement = useCallback(() => setIsFocusedElement(true), []);
  const onBlurElement = useCallback(() => setIsFocusedElement(false), []);

  return {
    isFocusedElement,
    onFocusElement,
    onBlurElement,
  };
};
