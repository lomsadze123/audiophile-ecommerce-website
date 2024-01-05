import ZX9mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import ZX9tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import ZX9desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { CountType } from "../../types/Types";
// import earphones from "../../assets/home/mobile/image-earphones-yx1.jpg"

const ZX9Speaker = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <div
      className="bg-skinColorBold text-center flex flex-col items-center rounded-[8px] py-[55px] lg:pb-0 lg:pt-[99px] lg:items-start gap-9 text-white mb-6 lg:flex-row lg:justify-between lg:pl-[122px] lg:text-left
    lg:pr-[88px] lg:mb-10"
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet={ZX9desktop} />
        <source media="(min-width: 768px)" srcSet={ZX9tablet} />
        <img
          className="max-w-[172px] md:max-w-[195px] lg:max-w-[392px]"
          src={ZX9mobile}
          alt="image-speaker-zx9"
        />
      </picture>
      <div>
        <h2 className="text-4xl md:text-[56px] md:leading-[58px]">
          ZX9 <br />
          SPEAKER
        </h2>
        <p className="text-[15px] opacity-75 font-medium p-6 md:max-w-[379px] md:pb-10 lg:px-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/detail/speakers" state={6}>
          <Button
            setCount={setCount}
            bgColor="bg-mediumBlack"
            border="border-none"
          />
        </Link>
      </div>
    </div>
  );
};

export default ZX9Speaker;
