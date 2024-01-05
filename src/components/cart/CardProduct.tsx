import { Fragment } from "react";
import { cartImages } from "../../objects/CategoryImage";
import { CountType, DetailTypes } from "../../types/Types";
import CountButton from "../button/CountButton";

const CardProduct = ({
  productData,
  count,
  setCount,
}: {
  productData: DetailTypes[] | undefined;
  count: CountType[];
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  const total = productData?.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h2>CART ({productData?.length})</h2>
        <p className="underline opacity-50 font-medium cursor-pointer">
          Remove all
        </p>
      </div>
      <ul className="flex flex-col gap-6">
        {productData?.map((product) => (
          <Fragment key={product.productName}>
            <li className="flex items-center gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <img
                  className="rounded-[8px] max-w-16"
                  src={cartImages[product.productName]}
                  alt={product.title}
                />
                <div>
                  <h3 className="text-[15px]">{product.title}</h3>
                  <p className="opacity-50 text-sm">$ {product.price}</p>
                </div>
              </div>
              <div>
                <CountButton count={count} setCount={setCount} />
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
      <div className="flex justify-between mt-8 mb-6">
        <h3 className="text-[15px] opacity-50 font-medium">TOTAL</h3>
        <p className="text-lg">$ {total?.toLocaleString()}</p>
      </div>
      <button className="w-full tracking-[1px] uppercase text-white text-[13px] py-[15px]  bg-skinColorBold">
        checkout
      </button>
    </>
  );
};

export default CardProduct;
