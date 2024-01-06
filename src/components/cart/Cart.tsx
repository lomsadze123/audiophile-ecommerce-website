import { motion } from "framer-motion";
import { DetailTypes } from "../../types/Types";
import CardProduct from "./CardProduct";

const Cart = ({
  productData,
  setProductData,
  setShow,
}: {
  productData: DetailTypes[] | undefined;
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-[28px] max-w-[377px] py-8 bg-white text-mediumBlack rounded-[8px] md:px-8 ml-auto lg:mr-36"
    >
      <CardProduct
        setShow={setShow}
        productData={productData}
        setProductData={setProductData}
      />
    </motion.article>
  );
};

export default Cart;
