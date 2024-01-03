import Product from "../../types/Types";
import Button from "../button/Button";
import {
  earphoneList,
  headphonesList,
  speakerList,
} from "../../objects/CategoryImage";
import { Link, useLocation } from "react-router-dom";

const CategoryItems = ({ data }: { data: Product[] | null }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const listMapping: { [key: string]: string[] } = {
    headphones: headphonesList,
    speakers: speakerList,
    earphones: earphoneList,
  };
  const selected = listMapping[path];
  const whichIndex =
    (path === "headphones" && 2) ||
    (path === "earphones" && 1) ||
    (path === "speakers" && 5) ||
    0;

  return (
    <>
      {data?.map(
        (product, index) =>
          product.category === path && (
            <section
              className={`mb-[120px] flex flex-col gap-8 ${
                index === 2 || index === 5
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } lg:gap-0 lg:justify-between lg:items-center`}
              key={product.id}
            >
              <img
                className="rounded-[8px] max-w-[327px] mx-auto md:max-w-[689px] lg:max-w-[540px] lg:mx-0"
                src={selected[product.id - whichIndex]}
                alt={`image-${product.name}`}
              />
              <div className="text-center text-white lg:text-left">
                {product.new && (
                  <p className="text-sm font-normal text-skinColorBold tracking-[10px] mb-4">
                    NEW PRODUCT
                  </p>
                )}
                <h1 className="text-[28px] text-mediumBlack leading-[38.25px] tracking-[1.286px] uppercase mb-6 md:text-[40px] md:leading-[44px] ">
                  {product.name.split(" ").slice(0, -1).join(" ")} <br /> {path}
                </h1>
                <p className="text-[15px] font-normal text-mediumBlack px-6 opacity-75 leading-[25px] mb-[28px] md:mb-10 max-w-[579px] mx-auto lg:mx-0 lg:p-0">
                  {product.description}
                </p>
                <Link to={`/detail/${product.category}`} state={product.id}>
                  <Button bgColor="bg-skinColorBold" border="border-none" />
                </Link>
              </div>
            </section>
          )
      )}
    </>
  );
};

export default CategoryItems;
