import { Link } from "react-router-dom";
import Button from "../button/Button";

const ZX7speaker = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="bg-mobileZX7 md:bg-tabletZX7 lg:bg-desktopZX7 bg-cover bg-no-repeat h-full mb-6 rounded-[8px] lg:mb-10">
      <div className="py-[101px] pl-6 md:pl-[62.25px]">
        <h2 className="text-[28px] tracking-[2px] mb-8">ZX7 SPEAKER</h2>
        <Link to="/detail/speakers" state={5}>
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

export default ZX7speaker;
