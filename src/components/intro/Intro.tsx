import { useState } from "react";
import Header from "../header/Header";
import Description from "./Description";
import Items from "../Items/Items";
import useWidth from "../../hooks/useWidth";
import { useLocation } from "react-router-dom";

const Intro = () => {
  const [hide, setHide] = useState(false);
  const width = useWidth();
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
      <Header hide={hide} setHide={setHide} />
      {hide && width < 1024 && (
        <div className="fixed bottom-0 left-0 top-16 md:top-20 right-0 z-10 bg-black bg-opacity-50 overflow-auto">
          <Items hide={hide} />
        </div>
      )}
      {location.pathname === "/" ? (
        <Description />
      ) : (
        <h2 className="pt-24 pb-8 text-[28px] tracking-[2px] text-white text-center">
          {title}
        </h2>
      )}
    </div>
  );
};

export default Intro;
