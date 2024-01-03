import { useEffect } from "react";

const useScrollLock = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);
};

export default useScrollLock;
