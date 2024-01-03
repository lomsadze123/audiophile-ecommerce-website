import { useState } from "react";
import Header from "../header/Header";
import Description from "./Description";
import Items from "../Items/Items";
import useWidth from "../../hooks/useWidth";
import { Link, useLocation } from "react-router-dom";

const Intro = () => {
  const [hide, setHide] = useState(false);
  const width = useWidth();
  const [lockScroll, setLockScroll] = useState(false);
  const location = useLocation();
  const title =
    location.pathname.split("/")[2] &&
    location.pathname.split("/")[2].toUpperCase();

  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-mobileHomeHeader md:bg-tabletHomeHeader lg:bg-desktopHomeHeader"
          : "bg-mediumBlack"
      } bg-no-repeat bg-cover bg-center w-full h-full`}
    >
      <Header
        hide={hide}
        setHide={setHide}
        lockScroll={lockScroll}
        setLockScroll={setLockScroll}
      />
      {hide && width < 1024 && (
        <div className="fixed bottom-0 left-0 top-16 md:top-20 right-0 z-10 bg-black bg-opacity-50 overflow-auto">
          <Items hide={hide} setHide={setHide} setLockScroll={setLockScroll} />
        </div>
      )}
      {location.pathname.startsWith("/category") && (
        <h2 className="pt-24 pb-8 text-[28px] tracking-[2px] text-white text-center mb-16 md:text-[40px] md:pt-[165px] md:pb-[97px]">
          {title}
        </h2>
      )}
      {location.pathname === "/" && <Description />}
      {location.pathname.startsWith("/detail") && (
        <Link
          className="text-mediumBlack opacity-50 translate-y-10 mx-6 pt-[45px] md:pt-[61px] text-[15px] block"
          to="/"
        >
          Go Back
        </Link>
      )}
    </div>
  );
};

export default Intro;
