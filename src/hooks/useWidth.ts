import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    const handleQuery = () => {
      setWidth(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleQuery);
    return () => {
      window.removeEventListener("resize", handleQuery);
    };
  }, []);

  return width;
};

export default useWidth;
