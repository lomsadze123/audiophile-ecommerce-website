import { Link } from "react-router-dom";
import Button from "../button/Button";
import { CountType } from "../../types/Types";

const Description = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <div className="pb-[108px] md:pb-[200px] pt-[158px] text-center text-white lg:text-left lg:pl-[165px] lg:pt-[198px]">
      <p className="text-sm font-normal tracking-[10px] opacity-[0.4964] mb-4">
        NEW PRODUCT
      </p>
      <h1 className="text-4xl tracking-[1.286px] uppercase mb-6 md:text-[56px] md:leading-[58px]">
        XX99 Mark II <br />
        HeadphoneS
      </h1>
      <p className="text-[15px] font-normal px-6 opacity-75 leading-[25px] mb-[28px] md:mb-10 max-w-[390px] mx-auto lg:mx-0 lg:p-0">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link to="/detail/headphones" state={4}>
        <Button
          setCount={setCount}
          bgColor="bg-skinColorBold"
          border="border-none"
        />
      </Link>
    </div>
  );
};

export default Description;
