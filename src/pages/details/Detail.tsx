import Items from "../../components/Items/Items";
import Details from "../../components/detailItems/Details";
import AudioGear from "../../components/homeProducts/AudioGear";
import Product, { DetailTypes } from "../../types/Types";

const Detail = ({
  data,
  productData,
  setProductData,
  count,
  setCount,
  quantity,
  setQuantity,
}: {
  data: Product[] | null;
  productData: DetailTypes[];
  setProductData: React.Dispatch<React.SetStateAction<DetailTypes[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <main className="mx-6 mt-[66px] md:mt-[82px] lg:mt-[160px] max-w-[1244px] lg:mx-auto">
      <Details
        productData={productData}
        setProductData={setProductData}
        data={data}
        count={count}
        setCount={setCount}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Items />
      <AudioGear />
    </main>
  );
};

export default Detail;
