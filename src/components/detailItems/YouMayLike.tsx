import { Link } from "react-router-dom";
import {
  DesktopShared,
  MobileShared,
  TabletShared,
} from "../../objects/CategoryImage";
import Product, { CountType } from "../../types/Types";
import Button from "../button/Button";

const YouMayLike = ({
  data,
  findProduct,
  setCount,
}: {
  findProduct: Product | undefined;
  data: Product[] | null;
  setCount: React.Dispatch<React.SetStateAction<CountType[]>>;
}) => {
  const slugToIdMap = data?.reduce((acc: Record<string, number>, item) => {
    acc[item.slug] = item.id;
    return acc;
  }, {});

  return (
    <div className="text-center">
      <h2 className="uppercase text-2xl tracking-[0.857px] mb-10 md:text-[32px] md:mb-14 lg:mb-16">
        you may also like
      </h2>
      <div className="flex flex-col gap-[56px] md:flex-row md:gap-3">
        {findProduct?.others.map((product) => (
          <div key={product.slug}>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={
                  DesktopShared[
                    product.slug.split("-").slice(0, -1).join("").toLowerCase()
                  ]
                }
              />
              <source
                media="(min-width: 768px)"
                srcSet={
                  TabletShared[
                    product.slug.split("-").slice(0, -1).join("").toLowerCase()
                  ]
                }
              />
              <img
                className="rounded-[8px] mx-auto"
                src={
                  MobileShared[
                    product.slug.split("-").slice(0, -1).join("").toLowerCase()
                  ]
                }
                alt="image-speaker-zx9"
              />
            </picture>
            <h2 className="text-2xl tracking-[1.714px] my-8 md:mt-10">
              {product.name}
            </h2>
            <Link
              className="text-white"
              to={"/detail/headphones"}
              state={slugToIdMap?.[product.slug]}
            >
              <Button
                setCount={setCount}
                bgColor="bg-skinColorBold"
                border="border-none"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
