import React, { useEffect, useRef, cloneElement } from "react";

interface ClickOutsideProps {
  children: React.ReactElement;
  onClick(e: MouseEvent): void;
  className?: string;
}

export const ClickOutside: React.FC<ClickOutsideProps> = ({
  children,
  className,
  onClick,
}) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof Node &&
        onClick &&
        !ref?.current?.contains(e.target)
      ) {
        onClick(e);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return cloneElement(children, { className, ref });
};
