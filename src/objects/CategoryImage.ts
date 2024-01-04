import XX99headphonesMarkII from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99headphonesMarkI from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59headphones from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import ZX9Speaker from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7Speaker from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import YX1Earphone from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import XX99IIMobile from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import XX99IITablet from "../assets/shared/tablet/image-xx99-mark-two-headphones.jpg";
import XX99IIDesktop from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";

import XX99IMobile from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import XX99ITablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import XX99IDesktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

import XX59Mobile from "../assets/shared/mobile/image-xx59-headphones.jpg";
import XX59Tablet from "../assets/shared/tablet/image-xx59-headphones.jpg";
import XX59Desktop from "../assets/shared/desktop/image-xx59-headphones.jpg";

import ZX9Mobile from "../assets/shared/mobile/image-zx9-speaker.jpg";
import ZX9Tablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import ZX9Desktop from "../assets/shared/desktop/image-zx9-speaker.jpg";

import ZX7Mobile from "../assets/shared/mobile/image-zx7-speaker.jpg";
import ZX7Tablet from "../assets/shared/tablet/image-zx7-speaker.jpg";
import ZX7Desktop from "../assets/shared/desktop/image-zx7-speaker.jpg";

export const MobileShared: { [key: string]: string } = {
  xx99marktwo: XX99IIMobile,
  xx99markone: XX99IMobile,
  xx59: XX59Mobile,
  zx9: ZX9Mobile,
  zx7: ZX7Mobile,
};

export const TabletShared: { [key: string]: string } = {
  xx99marktwo: XX99IITablet,
  xx99markone: XX99ITablet,
  xx59: XX59Tablet,
  zx9: ZX9Tablet,
  zx7: ZX7Tablet,
};

export const DesktopShared: { [key: string]: string } = {
  xx99marktwo: XX99IIDesktop,
  xx99markone: XX99IDesktop,
  xx59: XX59Desktop,
  zx9: ZX9Desktop,
  zx7: ZX7Desktop,
};

export const headphonesList = [
  XX59headphones,
  XX99headphonesMarkI,
  XX99headphonesMarkII,
];

export const speakerList = [ZX7Speaker, ZX9Speaker];

export const earphoneList = [YX1Earphone];
