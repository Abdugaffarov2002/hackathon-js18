import { Product } from "./product";
export interface ICartProduct extends Product {
  count: number;
  subPrice: number;
}
