import facebook from "../../icons/icon-facebook.svg";
import instagram from "../../icons/icon-instagram.svg";
import twitter from "../../icons/icon-twitter.svg";

const Icons = () => {
  const list = [facebook, twitter, instagram];

  return (
    <div className="flex items-center gap-4 justify-center py-12 md:p-0 cursor-pointer">
      {list.map((items) => (
        <img key={items} src={items} alt="social network icons" />
      ))}
    </div>
  );
};

export default Icons;
