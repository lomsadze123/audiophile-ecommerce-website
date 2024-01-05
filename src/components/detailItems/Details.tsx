import { useLocation } from "react-router-dom";
import Product, { CountType, DetailTypes } from "../../types/Types";
import {
  MobileImages,
  desktopImages,
  tabletImages,
} from "../../objects/DetailsImage";
import DetailPictures from "./DetailPictures";
import YouMayLike from "./YouMayLike";
import CountButton from "../button/CountButton";
import { useState } from "react";

const Details = ({
  data,
  setProductData,
  productData,
  count,
  setCount,
}: {
  data: Product[] | null;
  productData: DetailTypes[];
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
  count: CountType[];
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const findProduct = data?.find((item) => item.id === location.state);

  const productName =
    findProduct?.name.split(" ").slice(0, -1).join("").toLowerCase() || "";

  console.log(quantity);

  return (
    <section className="mb-[120px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between lg:items-center mb-[88px] md:flex-row md:items-center md:gap-[69.5px]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={desktopImages[productName]}
          />
          <source
            media="(min-width: 768px)"
            srcSet={tabletImages[productName]}
          />
          <img
            className="rounded-[8px] mx-auto lg:max-w-[540px]"
            src={MobileImages[productName]}
            alt={productName}
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
          <p className="text-[15px] font-normal text-mediumBlack opacity-75 leading-[25px] mb-6 md:mb-10 max-w-[579px] mx-auto lg:mx-0 lg:p-0">
            {findProduct?.description}
          </p>
          <h3 className="text-lg tracking-[1.286px] text-mediumBlack">
            $ {findProduct?.price}
          </h3>
          <div
            onClick={(e) =>
              setQuantity(
                Number(e.currentTarget.children[0].children[1].textContent)
              )
            }
            className="flex gap-4 mt-[31px]"
          >
            <CountButton count={count} setCount={setCount} />
            <button
              onClick={() => {
                const existingProductIndex = productData.findIndex(
                  (p) =>
                    p.title ===
                    findProduct?.name.split(" ").slice(0, -1).join(" ")
                );

                if (existingProductIndex !== -1) {
                  setProductData((prevData) => {
                    const updatedData = [...prevData];
                    updatedData[existingProductIndex] = {
                      ...updatedData[existingProductIndex],
                      quantity:
                        (count.find((p) => p.id === location.state)?.count ||
                          1) + updatedData[existingProductIndex].quantity,
                    };
                    return updatedData;
                  });
                } else if (findProduct) {
                  setProductData((prevData) => [
                    ...prevData,
                    {
                      title: findProduct.name.split(" ").slice(0, -1).join(" "),
                      price: findProduct?.price,
                      quantity: quantity,
                      productName: productName,
                    },
                  ]);
                }
              }}
              className="text-[13px] tracking-[1px] uppercase bg-skinColorBold border-[1px] py-[15px] px-[30.5px]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="text-mediumBlack flex flex-col gap-[88px] mb-[88px] lg:flex-row">
        <div>
          <h2 className="text-2xl mb-6 md:text-[32px]">FEATURES</h2>
          <p className="opacity-50 font-medium max-w-[635px]">
            {findProduct?.features}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-[16rem] lg:flex-col lg:gap-8">
          <h2 className="uppercase text-2xl tracking-[0.857px] md:text-[32px]">
            in the box
          </h2>
          <ul className="flex flex-col gap-2">
            {findProduct?.includes.map((items, index) => (
              <div
                key={index}
                className="grid grid-flow-col grid-cols-[20px_minmax(100px,_1fr)] gap-6"
              >
                <span className="text-skinColorBold">{items.quantity}x</span>
                <li className="opacity-50 font-medium">{items.item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 md:grid-flow-col md:grid-cols-[300px,400px] md:justify-center md:gap-x-0 lg:grid-cols-[470px,638px] mb-[120px] lg:mb-[160px]">
        <DetailPictures productName={productName} />
      </div>
      <div>
        <YouMayLike setCount={setCount} findProduct={findProduct} data={data} />
      </div>
    </section>
  );
};

export default Details;
