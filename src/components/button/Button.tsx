const Button = ({ bgColor, border }: { bgColor: string; border: string }) => {
  return (
    <button
      className={`text-[13px] tracking-[1px] uppercase ${bgColor} border-[1px] ${border} py-[15px] px-[30.5px]`}
    >
      See Product
    </button>
  );
};

export default Button;
