import { ProductType } from "./ProductType";

export interface CartProductType extends ProductType {
  qty: number;
  totalAmount: number;
}
