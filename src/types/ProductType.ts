export type VolumeType = {
  qty: string;
  unit: "мл" | "г";
};

export interface ProductType {
  id: number;
  title: string;
  desc: string;
  barcode: string;
  producerName: string;
  brand: string;
  price: number;
  img: string;
  isPopular: boolean;
  volume: VolumeType;
  categorySlug: string;
}
