import menu from "../../icons/icon-hamburger.svg";
import logo from "../../icons/logo.svg";
import cart from "../../icons/icon-cart.svg";
import useBgChange from "../../hooks/useBgChange";
import useWidth from "../../hooks/useWidth";
import Navigation from "../navigation/Navigation";
import useScrollLock from "../../hooks/useScrollLock";
import { ItemTypes } from "../../types/Types";

const Header = ({ hide, setHide, lockScroll, setLockScroll }: ItemTypes) => {
  const opacity = useBgChange();
  const width = useWidth();

  lockScroll !== undefined && useScrollLock(lockScroll);

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
      <img
        className="md:mr-auto md:pl-[42px] lg:m-0 lg:p-0"
        src={logo}
        alt="audiophile logo"
      />
      {width >= 1024 && <Navigation />}
      <img src={cart} alt="cart logo" />
    </header>
  );
};

export default Header;
