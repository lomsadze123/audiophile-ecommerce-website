import { useNavigate } from "react-router-dom";
import { DetailTypes } from "../../types/Types";
import OnlyProduct from "./OnlyProduct";

const CardProduct = ({
  productData,
  setProductData,
  setShow,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

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
          className="underline opacity-50 font-medium cursor-pointer lg:hover:text-skinColorBold"
          onClick={() => setProductData([])}
        >
          Remove all
        </p>
      </div>
      <OnlyProduct
        productData={productData}
        setProductData={setProductData}
        howMany={productData?.length || 1}
      />
      <div className="flex justify-between mt-8 mb-6">
        <h3 className="text-[15px] opacity-50 font-medium">TOTAL</h3>
        <p className="text-lg">$ {total?.toLocaleString()}</p>
      </div>
      <button
        onClick={() => {
          if (productLength && productLength > 0) {
            navigate("/form");
            setShow(false);
          }
        }}
        className="w-full tracking-[1px] uppercase text-white text-[13px] py-[15px] bg-skinColorBold lg:hover:bg-skinColor"
      >
        checkout
      </button>
    </>
  );
};

export default CardProduct;
