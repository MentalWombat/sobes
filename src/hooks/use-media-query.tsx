import { useEffect, useState } from 'react';

export default function useMediaQuery() {
  const [small, setSmall] = useState<boolean | null>(null);

  useEffect(() => {
    const updateSize = (e: MediaQueryListEvent | MediaQueryList) => {
      setSmall(e.matches);
    };
    const mql = window.matchMedia('(width < 40rem)');
    updateSize(mql);
    mql.addEventListener('change', updateSize);

    return () => mql.removeEventListener('change', updateSize);
  }, []);

  return small;
}
