import ZX9mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import ZX9tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import ZX9desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import Button from "../button/Button";
// import earphones from "../../assets/home/mobile/image-earphones-yx1.jpg"

const ZX9Speaker = () => {
  return (
    <div className="bg-skinColorBold text-center flex flex-col items-center rounded-[8px] py-[55px] gap-9 text-white mb-6">
      <picture>
        <source media="(min-width: 1024px)" srcSet={ZX9desktop} />
        <source media="(min-width: 768px)" srcSet={ZX9tablet} />
        <img
          className="max-w-[172px]"
          src={ZX9mobile}
          alt="image-speaker-zx9"
        />
      </picture>
      <div>
        <h2 className="text-4xl">
          ZX9 <br />
          SPEAKER
        </h2>
        <p className="text-[15px] opacity-75 font-medium p-6">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button bgColor="bg-mediumBlack" border="border-none" />
      </div>
    </div>
  );
};

export default ZX9Speaker;
