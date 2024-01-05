import Items from "../../components/Items/Items";
import AudioGear from "../../components/homeProducts/AudioGear";
import Earphones from "../../components/homeProducts/Earphones";
import ZX7speaker from "../../components/homeProducts/ZX7speaker";
import ZX9Speaker from "../../components/homeProducts/ZX9Speaker";
import { CountType } from "../../types/Types";

const Home = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <main className="mt-8 mx-6 md:mt-20 max-w-[1110px] lg:mx-auto">
      <Items />
      <ZX9Speaker setCount={setCount} />
      <ZX7speaker setCount={setCount} />
      <Earphones setCount={setCount} />
      <AudioGear />
    </main>
  );
};

export default Home;
