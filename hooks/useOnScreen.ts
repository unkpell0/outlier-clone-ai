
import { useState, useEffect, useRef, RefObject } from 'react';

export const useOnScreen = <T extends Element,>(options?: IntersectionObserverInit): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsOnScreen(true);
        // Optional: unobserve after it's visible so it doesn't trigger again
        // observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isOnScreen];
};
