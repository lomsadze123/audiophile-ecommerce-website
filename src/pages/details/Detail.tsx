import Items from "../../components/Items/Items";
import Details from "../../components/detailItems/Details";
import AudioGear from "../../components/homeProducts/AudioGear";
import Product, { CountType, DetailTypes } from "../../types/Types";

const Detail = ({
  data,
  productData,
  setProductData,
  count,
  setCount,
}: {
  data: Product[] | null;
  productData: DetailTypes[];
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
  count: CountType[];
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  return (
    <main className="mx-6 mt-[66px] md:mt-[82px] lg:mt-[160px] max-w-[1244px] lg:mx-auto">
      <Details
        count={count}
        setCount={setCount}
        productData={productData}
        setProductData={setProductData}
        data={data}
      />
      <Items />
      <AudioGear />
    </main>
  );
};

export default Detail;
