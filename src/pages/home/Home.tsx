import Items from "../../components/Items/Items";
import AudioGear from "../../components/homeProducts/AudioGear";
import Earphones from "../../components/homeProducts/Earphones";
import ZX7speaker from "../../components/homeProducts/ZX7speaker";
import ZX9Speaker from "../../components/homeProducts/ZX9Speaker";

const Home = () => {
  return (
    <div className="mt-8 mx-6">
      <Items />
      <ZX9Speaker />
      <ZX7speaker />
      <Earphones />
      <AudioGear />
    </div>
  );
};

export default Home;
