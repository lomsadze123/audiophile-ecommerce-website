import { Link } from "react-router-dom";
import { DetailTypes } from "../../types/Types";
import OnlyProduct from "./OnlyProduct";

const CardProduct = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  const total = productData?.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  const productLength = productData?.reduce((acc, product) => {
    return (acc += product.quantity);
  }, 0);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h2>CART ({productLength})</h2>
        <p
          className="underline opacity-50 font-medium cursor-pointer"
          onClick={() => setProductData([])}
        >
          Remove all
        </p>
      </div>
      <OnlyProduct productData={productData} setProductData={setProductData} />
      <div className="flex justify-between mt-8 mb-6">
        <h3 className="text-[15px] opacity-50 font-medium">TOTAL</h3>
        <p className="text-lg">$ {total?.toLocaleString()}</p>
      </div>
      <Link to="/form">
        <button className="w-full tracking-[1px] uppercase text-white text-[13px] py-[15px]  bg-skinColorBold">
          checkout
        </button>
      </Link>
    </>
  );
};

export default CardProduct;
