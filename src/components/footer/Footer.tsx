import logo from "../../icons/logo.svg";
import Navigation from "../navigation/Navigation";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-lightBlack text-white text-center px-6 md:px-[39px] md:text-left lg:px-[166px]">
      <div className="lg:flex lg:items-end lg:justify-between">
        <img
          className="max-w-[143px] mx-auto py-12 border-t-[3px] border-t-skinColorBold md:mx-0 md:pt-14 md:pb-8 lg:pt-[75px] lg:pb-0"
          src={logo}
          alt="audiophile logo"
        />
        <Navigation />
      </div>
      <p className="py-12 opacity-50 text-[15px] leading-[25px] font-medium md:pt-8 md:pb-20 lg:max-w-[540px]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className="md:flex md:justify-between md:pb-10 lg:pb-12">
        <small className="opacity-50 text-[15px]">
          Copyright 2021. All Rights Reserved
        </small>
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
