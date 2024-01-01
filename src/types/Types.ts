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

export default Product;
