import { useLocation } from "react-router-dom";
import { DetailTypes } from "../../types/Types";
import CountButton from "../button/CountButton";
import { Fragment } from "react";
import { cartImages } from "../../objects/CategoryImage";

const OnlyProduct = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  const location = useLocation();

  const handleQuantityChange = (index: number, newQuantity: number) => {
    setProductData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        quantity: newQuantity,
      };
      return updatedData;
    });
  };

  return (
    <ul className="flex flex-col gap-6">
      {productData?.map((product, index) => (
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
              {location.pathname === "/form" ? (
                <p className="text-[15px] text-mediumBlack opacity-50">
                  x{product.quantity}
                </p>
              ) : (
                <CountButton
                  count={product.quantity}
                  setCount={(newCount) => handleQuantityChange(index, newCount)}
                  quantity={product.quantity}
                  setQuantity={(newQuantity) =>
                    handleQuantityChange(index, newQuantity)
                  }
                />
              )}
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default OnlyProduct;
