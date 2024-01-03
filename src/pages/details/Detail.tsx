import Details from "../../components/detailItems/Details";
import Product from "../../types/Types";

const Detail = ({ data }: { data: Product[] | null }) => {
  return (
    <main className="mx-6 mt-[66px]">
      <Details data={data} />
    </main>
  );
};

export default Detail;
