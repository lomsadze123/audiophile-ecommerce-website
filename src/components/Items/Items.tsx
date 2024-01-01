import arrow from "../../icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import list from "../../objects/ItemsObj";

const Items = () => {
  return (
    <section className="flex flex-col gap-4 items-center mb-[120px]">
      {list.map((item) => (
        <div
          key={item.title}
          className="relative flex flex-col items-center before:content-[''] before:h-[165px] before:bg-almostGrey before:absolute
    before:bottom-0 before:left-[-48%] before:w-[200%] before:rounded-[8px] before:z-[-1] pb-[22px]"
        >
          <img className="max-w-[147px]" src={item.image} alt={item.title} />
          <h2 className="text-[15px] tracking-[1.071px] mb-[17px]">
            {item.title}
          </h2>
          <Link
            to="/"
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
