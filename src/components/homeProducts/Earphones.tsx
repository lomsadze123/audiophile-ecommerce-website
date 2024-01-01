import earphonesMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earphonesTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earphonesDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button from "../button/Button";

const Earphones = () => {
  return (
    <div className="flex flex-col gap-6 mb-[96px] md:flex-row">
      <picture className="grow-[-1]">
        <source media="(min-width: 980px)" srcSet={earphonesDesktop} />
        <source media="(min-width: 768px)" srcSet={earphonesTablet} />
        <img
          className="rounded-[8px] mx-auto md:max-w-[350px]"
          src={earphonesMobile}
          alt="image-speaker-zx9"
        />
      </picture>
      <div className="bg-almostGrey py-[41px] pl-6 rounded-[8px] grow">
        <h2 className="text-[28px] tracking-[2px] mb-8">YX1 EARPHONES</h2>
        <Button bgColor="" border="border-mediumBlack" />
      </div>
    </div>
  );
};

export default Earphones;
