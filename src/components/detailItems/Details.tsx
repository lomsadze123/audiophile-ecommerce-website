import { useLocation } from "react-router-dom";
import Product from "../../types/Types";
import {
  MobileImages,
  desktopImages,
  tabletImages,
} from "../../objects/DetailsImage";

const Details = ({ data }: { data: Product[] | null }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const findProduct = data?.find((item) => item.id === location.state);

  const productName =
    findProduct?.name.split(" ").slice(0, -1).join("").toLowerCase() || "";

  return (
    <section
      className={`mb-[120px] flex flex-col gap-8 ${
        2 === 2 || 5 === 5 ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:gap-0 lg:justify-between lg:items-center`}
      key={1}
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={desktopImages[productName]}
        />
        <source media="(min-width: 768px)" srcSet={tabletImages[productName]} />
        <img
          className="rounded-[8px] mx-auto"
          src={MobileImages[productName]}
          alt="image-speaker-zx9"
        />
      </picture>
      <div className="text-white">
        {findProduct?.new && (
          <p className="text-sm font-normal text-skinColorBold tracking-[10px] mb-4">
            NEW PRODUCT
          </p>
        )}
        <h1 className="text-[28px] text-mediumBlack leading-[38.25px] tracking-[1.286px] uppercase mb-6 md:text-[40px] md:leading-[44px] ">
          {findProduct?.name.split(" ").slice(0, -1).join(" ")} <br /> {path}
        </h1>
        <p className="text-[15px] font-normal text-mediumBlack opacity-75 leading-[25px] mb-[28px] md:mb-10 max-w-[579px] mx-auto lg:mx-0 lg:p-0">
          {findProduct?.description}
        </p>
      </div>
    </section>
  );
};

export default Details;

{
  /* <Button bgColor="bg-skinColorBold" border="border-none" /> */
}
