interface ImagePaths {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImagePaths;
  category: string;
  categoryImage: ImagePaths;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
  others: {
    slug: string;
    name: string;
    image: ImagePaths;
  }[];
}

export interface ItemTypes {
  hide?: boolean;
  setHide?: React.Dispatch<React.SetStateAction<boolean>>;
  lockScroll?: boolean;
  setLockScroll?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Product;
