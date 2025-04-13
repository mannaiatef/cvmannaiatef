import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {},
): boolean => {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const { threshold = 0, root = null, rootMargin = '0px', triggerOnce = false } = options;
    
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.root, options.rootMargin, options.triggerOnce]);
  
  return inView;
};
