import { CountType, DetailTypes } from "../../types/Types";
import CardProduct from "./CardProduct";

const Cart = ({
  productData,
  count,
  setCount,
}: {
  productData: DetailTypes[] | undefined;
  count: CountType[];
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <article className="px-[28px] max-w-[377px] py-8 bg-white text-mediumBlack rounded-[8px] md:px-8 ml-auto lg:mr-36">
      <CardProduct
        count={count}
        setCount={setCount}
        productData={productData}
      />
    </article>
  );
};

export default Cart;
