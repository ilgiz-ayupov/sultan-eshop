import { ProductVolumeType } from "./ProductVolumeType";
import { ProductCategoryType } from "./ProductCategoryType";

export interface ProductType {
  id: number;
  title: string;
  barcode: string;
  producerName: string;
  brand: string;
  price: number;
  img: string;
  volume: ProductVolumeType;
  category: ProductCategoryType;
  desc?: string;
  isPopular?: boolean;
}
