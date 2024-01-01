import { useEffect, useState } from "react";

const useBgChange = (initial = 0) => {
  const [opacity, setOpacity] = useState(initial);

  useEffect(() => {
    const handleOpacity = () => {
      setOpacity(Math.min(document.documentElement.scrollTop / 96, 1));
    };

    handleOpacity();
    document.addEventListener("scroll", handleOpacity);

    return () => {
      document.removeEventListener("scroll", handleOpacity);
    };
  }, []);

  return opacity;
};

export default useBgChange;
