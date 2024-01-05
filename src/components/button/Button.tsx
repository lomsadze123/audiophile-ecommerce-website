import { useLocation } from "react-router-dom";
import { CountType } from "../../types/Types";

const Button = ({
  bgColor,
  border,
  setCount,
}: {
  bgColor: string;
  border: string;
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  const location = useLocation();

  return (
    <button
      // onClick={() =>
      //   setCount((prevCount) => [
      //     ...prevCount,
      //     { id: location.state, count: 1 },
      //   ])
      // }
      className={`text-[13px] tracking-[1px] uppercase ${bgColor} border-[1px] ${border} py-[15px] px-[30.5px]`}
    >
      See Product
    </button>
  );
};

export default Button;
