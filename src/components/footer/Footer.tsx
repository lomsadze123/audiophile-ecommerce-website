import logo from "../../icons/logo.svg";
import Navigation from "../navigation/Navigation";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-lightBlack text-white text-center">
      <img
        className="max-w-[143px] mx-auto py-12 border-t-[3px] border-t-skinColorBold"
        src={logo}
        alt="audiophile logo"
      />
      <Navigation />
      <p className="py-12 opacity-50 text-[15px] leading-[25px] px-6 font-medium">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <small className="opacity-50 text-[15px]">
        Copyright 2021. All Rights Reserved
      </small>
      <Icons />
    </footer>
  );
};

export default Footer;
