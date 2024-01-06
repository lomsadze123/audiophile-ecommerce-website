const Button = ({
  bgColor,
  border,
  setCount,
  hover,
}: {
  bgColor: string;
  border: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  hover: string;
}) => {
  return (
    <button
      onClick={() => setCount(1)}
      className={`text-[13px] tracking-[1px] uppercase ${bgColor} border-[1px] ${border} py-[15px] px-[30.5px] ${hover}`}
    >
      See Product
    </button>
  );
};

export default Button;
