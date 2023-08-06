import { MouseEventHandler } from "react";
import { Product, IProductCreate } from "../../models/product";

export interface IProductContextType {
  products: Product[];
  product: Product | null;
  createProduct: (newProduct: IProductCreate) => void;
  getProducts: () => void;
  getOneProduct: (id: number) => void;
  editProduct: (newProduct: Product) => void;
  deleteProduct: (id: number) => void;
  // deleteProductDetails: (id: number) => void;
  //   page: number;
  //   pageTotalCount: number;
  //   getProducts: () => void;
  //   addProduct: (newProduct: IProductCreate) => void;
  //   deleteProduct: (id: number) => void;
  //   getOneProduct: (id: number) => void;
  //   editProduct: (newData: IProduct) => void;
  //   setPage: (num: number) => void;
}

export interface IInitState {
  products: Product[];
  product: Product | null;
  pageTotalCount: number;
}

interface IProductsAction {
  type: "products";
  payload: Product[];
}
interface IProductAction {
  type: "product";
  payload: Product;
}

interface IPageTotalCountAction {
  type: "pageTotalCount";
  payload: number;
}

export type TProductAction = IProductsAction | IProductAction;
