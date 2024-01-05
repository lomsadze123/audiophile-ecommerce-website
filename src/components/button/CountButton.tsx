import { useLocation } from "react-router-dom";
import { CountType } from "../../types/Types";
import { useState } from "react";

const CountButton = ({
  count,
  setCount,
}: {
  count: CountType[];
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  const [count1, setCount1] = useState(1);
  const location = useLocation();

  // console.log(count);

  const handleIncrement = () => {
    const updatedCount = [...count];
    const index = updatedCount.findIndex((c) => c.id === location.state);

    if (index === -1) {
      updatedCount.push({ id: location.state, count: 2 });
    } else {
      setCount1(count1 - 1);
      updatedCount[index] = {
        ...updatedCount[index],
        count: updatedCount[index].count + 1,
      };
    }

    setCount(updatedCount);
  };

  const handleDecrement = () => {
    const updatedCount = [...count];
    const index = updatedCount.findIndex((c) => c.id === location.state);

    if (index !== -1 && updatedCount[index].count > 0) {
      updatedCount[index] = {
        ...updatedCount[index],
        count: updatedCount[index].count - 1,
      };
    }

    setCount(updatedCount);
  };

  return (
    <div className="text-mediumBlack bg-almostGrey flex gap-4 flex-1 justify-center items-center py-1 px-3 max-w-[150px]">
      <button onClick={handleDecrement} className="opacity-25 p-1">
        -
      </button>
      <span>{count.find((c) => c.id === location.state)?.count || 1}</span>
      <button onClick={handleIncrement} className="opacity-25 p-1">
        +
      </button>
    </div>
  );
};

export default CountButton;
