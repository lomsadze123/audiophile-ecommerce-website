import Items from "../../components/Items/Items";
import AudioGear from "../../components/homeProducts/AudioGear";
import Earphones from "../../components/homeProducts/Earphones";
import ZX7speaker from "../../components/homeProducts/ZX7speaker";
import ZX9Speaker from "../../components/homeProducts/ZX9Speaker";

const Home = () => {
  return (
    <main className="mt-8 mx-6 md:mt-20 max-w-[1110px] lg:mx-auto">
      <Items />
      <ZX9Speaker />
      <ZX7speaker />
      <Earphones />
      <AudioGear />
    </main>
  );
};

export default Home;
