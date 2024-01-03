import arrow from "../../icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import list from "../../objects/ItemsObj";
import { ItemTypes } from "../../types/Types";

const Items = ({ hide, setHide, setLockScroll }: ItemTypes) => {
  return (
    <section
      className={`flex flex-col gap-4 items-center md:flex-row md:justify-center z-[-2] md:gap-[85px] lg:gap-[215px] bg-white ${
        hide ? "py-8 md:py-14" : "mb-[120px] lg:mb-[160px]"
      }`}
    >
      {list.map((item) => (
        <div
          key={item.title}
          className="relative flex flex-col items-center before:content-[''] before:h-[165px] before:bg-almostGrey before:absolute before:bottom-0 before:left-[-48%] before:w-[200%]
          before:rounded-[8px] z-10 before:z-[-1] pb-[22px] md:before:w-[151%] md:before:left-[-25%] lg:before:w-[232%] lg:before:left-[-65%] lg:before:h-[200px] lg:before:bottom-[-30px]"
        >
          <img className="max-w-[147px]" src={item.image} alt={item.title} />
          <h2 className="text-[15px] tracking-[1.071px] mb-[17px] lg:text-lg">
            {item.title}
          </h2>
          <Link
            onClick={() => {
              setHide && setHide(false);
              setLockScroll && setLockScroll((prev) => !prev);
            }}
            to={`/category/${item.title.toLowerCase()}`}
            className="flex items-center gap-[13.32px] text-[#00000080] text-[13px]"
          >
            SHOP
            <img className="opacity-100" src={arrow} alt="" />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Items;
