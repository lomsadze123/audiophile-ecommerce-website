import { DetailTypes } from "../../types/Types";
import OnlyProduct from "../cart/OnlyProduct";
import confirm from "../../icons/icon-order-confirmation.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopUp = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  const [add, setAdd] = useState(1);

  const total = productData?.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  const grandTotal = total && total + 50 + 75;

  return (
    <div className="fixed bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center px-6 z-30">
      <div className="bg-white p-8 rounded-[8px] md:w-[540px] md:p-10">
        <img
          className="max-w-[64px] mb-6"
          src={confirm}
          alt="order confirmation icon"
        />
        <h2 className="text-2xl tracking-[0.857px] mb-4 md:text-[32px] leading-[36px] md:mb-6">
          THANK YOU <br />
          FOR YOUR ORDER
        </h2>
        <p className="text-[15px] font-medium opacity-50 mb-6 md:mb-8">
          You will receive an email confirmation shortly.
        </p>
        <div className="md:flex md:justify-center">
          <div className="bg-almostGrey rounded-t-[8px] md:rounded-s-[8px] md:rounded-tr-none px-6 pt-6 w-full">
            <OnlyProduct
              productData={productData}
              setProductData={setProductData}
              bool={true}
              howMany={add}
            />
            {productData && add === 1 ? (
              <p
                onClick={() => setAdd(productData.length)}
                className="text-xs opacity-50 border-t-[1px] border-opacity-[0.08] border-mediumBlack text-center py-3 mt-3 cursor-pointer"
              >
                and {productData?.length - 1} other item(s)
              </p>
            ) : (
              <p
                className="text-xs opacity-50 border-t-[1px] border-opacity-[0.08] border-mediumBlack text-center py-3 mt-3 cursor-pointer"
                onClick={() => setAdd(1)}
              >
                View less
              </p>
            )}
          </div>
          <div className="text-white text-lg bg-mediumBlack py-[15px] px-6 rounded-b-[8px] md:rounded-e-[8px] md:rounded-bl-none pt-8 w-full">
            <h3 className="opacity-50 text-[15px]">GRAND TOTAL</h3>
            <p>$ {grandTotal?.toLocaleString()}</p>
          </div>
        </div>
        <Link to="/">
          <button
            onClick={() => setProductData([])}
            className="w-full bg-skinColorBold text-white text-[13px] py-[15px] mt-6 md:mt-12 lg:hover:bg-skinColor"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopUp;
