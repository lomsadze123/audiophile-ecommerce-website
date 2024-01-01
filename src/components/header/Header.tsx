import menu from "../../icons/icon-hamburger.svg";
import logo from "../../icons/logo.svg";
import cart from "../../icons/icon-cart.svg";
import useBgChange from "../../hooks/useBgChange";

const Header = () => {
  const opacity = useBgChange();
  return (
    <header
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        transition: "background-color 0.3s ease",
      }}
      className={`fixed left-0 z-10 right-0 flex justify-between items-center p-5 border-b-[1px] border-b-white border-opacity-[0.104]`}
    >
      <img src={menu} alt="burger menu icon" />
      <img src={logo} alt="audiophile logo" />
      <img src={cart} alt="cart logo" />
    </header>
  );
};

export default Header;
