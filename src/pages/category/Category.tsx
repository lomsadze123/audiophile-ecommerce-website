import Items from "../../components/Items/Items";
import CategoryItems from "../../components/categoryItems/CategoryItems";
import AudioGear from "../../components/homeProducts/AudioGear";
import Product, { CountType } from "../../types/Types";

const Category = ({
  data,
  setCount,
}: {
  data: Product[] | null;
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <main className="mx-6 max-w-[1244px] lg:mx-auto">
      <CategoryItems setCount={setCount} data={data} />
      <Items />
      <AudioGear />
    </main>
  );
};

export default Category;
