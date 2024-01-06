const Button = ({
  bgColor,
  border,
  setCount,
}: {
  bgColor: string;
  border: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <button
      onClick={() => setCount(1)}
      className={`text-[13px] tracking-[1px] uppercase ${bgColor} border-[1px] ${border} py-[15px] px-[30.5px]`}
    >
      See Product
    </button>
  );
};

export default Button;
