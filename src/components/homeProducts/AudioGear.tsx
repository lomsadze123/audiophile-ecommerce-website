import gearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import gearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import gearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";

const AudioGear = () => {
  return (
    <div className="my-[120px] md:my-24 lg:flex lg:items-center lg:flex-row-reverse lg:justify-between lg:my-[200px]">
      <picture>
        <source media="(min-width: 1024px)" srcSet={gearDesktop} />
        <source media="(min-width: 768px)" srcSet={gearTablet} />
        <img
          className="rounded-[8px] mx-auto"
          src={gearMobile}
          alt="image-speaker-zx9"
        />
      </picture>
      <div className="mt-[63px] text-center px-6 md:px-16 lg:p-0 lg:mt-0 lg:max-w-[445px] lg:text-left">
        <h2 className="text-[28px] leading-[38px] uppercase tracking-[1px] mb-8 md:text-[44px] md:leading-[44px]">
          Bringing you the <span className="text-skinColorBold">best</span>{" "}
          audio gear
        </h2>
        <p className="opacity-50 font-medium leading-[25px] text-[15px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioGear;
