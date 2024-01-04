import Items from "../../components/Items/Items";
import Details from "../../components/detailItems/Details";
import AudioGear from "../../components/homeProducts/AudioGear";
import Product from "../../types/Types";

const Detail = ({ data }: { data: Product[] | null }) => {
  return (
    <main className="mx-6 mt-[66px] md:mt-[82px] lg:mt-[160px] max-w-[1244px] lg:mx-auto">
      <Details data={data} />
      <Items />
      <AudioGear />
    </main>
  );
};

export default Detail;
