import { useEffect, useState } from "react";

export default function useIsInViewport(
  ref: React.RefObject<HTMLElement | null>
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    if (ref?.current) observer?.observe(ref?.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
