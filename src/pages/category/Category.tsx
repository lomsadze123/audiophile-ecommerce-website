import Items from "../../components/Items/Items";
import CategoryItems from "../../components/categoryItems/CategoryItems";
import AudioGear from "../../components/homeProducts/AudioGear";
import Product from "../../types/Types";

const Category = ({ data }: { data: Product[] | null }) => {
  return (
    <main className="mx-6 max-w-[1244px] lg:mx-auto">
      <CategoryItems data={data} />
      <Items />
      <AudioGear />
    </main>
  );
};

export default Category;
