import menu from "../../icons/icon-hamburger.svg";
import logo from "../../icons/logo.svg";
import cart from "../../icons/icon-cart.svg";
import useBgChange from "../../hooks/useBgChange";
import useWidth from "../../hooks/useWidth";
import Navigation from "../navigation/Navigation";
import useScrollLock from "../../hooks/useScrollLock";
import { Addition } from "../../types/Types";
import { useState } from "react";
import Cart from "../cart/Cart";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({
  hide,
  setHide,
  lockScroll,
  setLockScroll,
  productData,
  setProductData,
}: Addition) => {
  const opacity = useBgChange();
  const width = useWidth();
  const [show, setShow] = useState(false);

  lockScroll !== undefined && useScrollLock(lockScroll);

  const productQuantity = productData?.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);

  return (
    <header
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        transition: "background-color 0.3s ease",
      }}
      className={`fixed left-0 z-20 right-0 top-0 flex justify-between items-center p-5 border-b-[1px] border-b-white border-opacity-[0.104] text-white md:py-[35px] lg:px-[165px]`}
    >
      {width < 1024 && (
        <img
          onClick={() => {
            setLockScroll && setLockScroll(!lockScroll);
            setHide && setHide(!hide);
          }}
          src={menu}
          alt="burger menu icon"
        />
      )}
      <Link to="/">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:mr-auto md:pl-[42px] lg:m-0 lg:p-0"
          src={logo}
          alt="audiophile logo"
        />
      </Link>
      {width >= 1024 && <Navigation />}
      <div className="relative">
        <img
          className="cursor-pointer"
          onClick={() => setShow(!show)}
          src={cart}
          alt="cart logo"
        />
        <p className="absolute bottom-4 left-3 text-sm bg-skinColorBold rounded-full font-normal px-2">
          {!!productQuantity && productQuantity > 0 && productQuantity}
        </p>
      </div>
      {show && (
        <div className="bg-black h-screen bg-opacity-50 absolute px-6 pt-6 md:pt-12 mt-[65px] md:mt-24 top-0 bottom-0 left-0 right-0">
          <Cart
            setShow={setShow}
            productData={productData}
            setProductData={setProductData}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
