import {
  DesktopGallery,
  MobileGallery,
  TabletGallery,
} from "../../objects/DetailsImage";

const DetailPictures = ({ productName }: { productName: string }) => {
  const desktopImages = DesktopGallery[productName];
  const tabletImages = TabletGallery[productName];
  const mobileImages = MobileGallery[productName];
  const check = desktopImages && tabletImages && mobileImages;

  return (
    <>
      {[0, 1, 2].map(
        (item) =>
          check && (
            <picture className={`${item === 2 && "md:row-span-2"}`} key={item}>
              <source
                media="(min-width: 1024px)"
                srcSet={desktopImages[item]}
              />
              <source media="(min-width: 768px)" srcSet={tabletImages[item]} />
              <img
                className={`rounded-[8px] mx-auto ${
                  item === 2
                    ? "md:max-w-[395.187px] lg:max-w-[635px]"
                    : "md:max-w-[276px] lg:max-w-[445px]"
                } md:mx-0`}
                src={mobileImages[item]}
                alt={productName}
              />
            </picture>
          )
      )}
    </>
  );
};

export default DetailPictures;
