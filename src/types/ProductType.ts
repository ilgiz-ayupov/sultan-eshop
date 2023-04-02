import { ProductVolumeType } from "./ProductVolumeType";
import { CategorySlugType } from "./CategorySlugType";

export interface ProductType {
  id: number;
  title: string;
  barcode: string;
  producerName: string;
  brand: string;
  price: number;
  img: string;
  volume: ProductVolumeType;
  categorySlug: CategorySlugType;

  type?: string;
  desc?: string;
  isPopular?: boolean;
}
