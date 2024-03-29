import earphonesMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earphonesTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earphonesDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Earphones = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <picture>
        <source media="(min-width: 1024px)" srcSet={earphonesDesktop} />
        <source media="(min-width: 768px)" srcSet={earphonesTablet} />
        <img
          className="rounded-[8px] mx-auto md:max-w-[370px] lg:max-w-[480px]"
          src={earphonesMobile}
          alt="image-speaker-zx9"
        />
      </picture>
      <div className="bg-almostGrey py-[41px] pl-6 rounded-[8px] grow md:pt-[101px] md:pl-[41px] lg:pl-[95px]">
        <h2 className="text-[28px] tracking-[2px] mb-8">YX1 EARPHONES</h2>
        <Link to="/detail/earphones" state={1}>
          <Button
            setCount={setCount}
            bgColor=""
            border="border-mediumBlack"
            hover="lg:hover:bg-mediumBlack lg:hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Earphones;
