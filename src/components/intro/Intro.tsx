import Header from "../header/Header";
import Description from "./Description";

const Intro = () => {
  return (
    <div className="bg-mobileHomeHeader bg-no-repeat bg-cover w-full h-full">
      <Header />
      <Description />
    </div>
  );
};

export default Intro;
