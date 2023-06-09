import { CategoryTypeType } from "./CategoryTypeType";

export interface CategoryType {
  name: string;
  img: string;
  slug: string;
  types?: CategoryTypeType[];
}
