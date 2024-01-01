import Button from "../button/Button";

const Description = () => {
  return (
    <div className="pb-[108px] pt-[158px] text-center text-white">
      <p className="text-sm font-normal tracking-[10px] opacity-[0.4964] mb-4">
        NEW PRODUCT
      </p>
      <h1 className="text-4xl tracking-[1.286px] uppercase mb-6">
        XX99 Mark II <br />
        HeadphoneS
      </h1>
      <p className="text-[15px] font-normal px-6 opacity-75 leading-[25px] mb-[28px]">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button bgColor="bg-skinColorBold" border="border-none" />
    </div>
  );
};

export default Description;
