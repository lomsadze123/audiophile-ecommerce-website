import { DetailTypes } from "../../types/Types";
import CardProduct from "./CardProduct";

const Cart = ({
  productData,
  setProductData,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
}) => {
  return (
    <article className="px-[28px] max-w-[377px] py-8 bg-white text-mediumBlack rounded-[8px] md:px-8 ml-auto lg:mr-36">
      <CardProduct productData={productData} setProductData={setProductData} />
    </article>
  );
};

export default Cart;
