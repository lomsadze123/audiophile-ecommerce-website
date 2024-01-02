import { useEffect, useState } from "react";

const useScrollLock = () => {
  const [isScrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const handleScrollLock = () => {
      if (isScrollLocked) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isScrollLocked]);

  const toggleScrollLock = () => {
    setScrollLocked((prev) => !prev);
  };

  return toggleScrollLock;
};

export default useScrollLock;
