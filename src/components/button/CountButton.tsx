import { useEffect } from "react";

const CountButton = ({
  count,
  setCount,
  quantity,
  setQuantity,
}: {
  count: number;
  setCount: (newCount: number) => void;
  quantity: number;
  setQuantity: (newCount: number) => void;
}) => {
  useEffect(() => {
    setQuantity(count);
  }, [count]);

  return (
    <div className="text-mediumBlack bg-almostGrey flex gap-4 flex-1 justify-center items-center py-1 px-3 max-w-[150px]">
      <button
        onClick={() => count > 1 && setCount(count - 1)}
        className="opacity-25 p-1 lg:hover:text-skinColorBold lg:hover:opacity-100"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="opacity-25 p-1 lg:hover:text-skinColorBold lg:hover:opacity-100"
      >
        +
      </button>
    </div>
  );
};

export default CountButton;
