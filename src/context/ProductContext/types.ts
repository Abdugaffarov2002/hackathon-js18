import { Product, IProductCreate } from "../../models/product";

export interface IProductContextType {
  products: Product[];
  product: Product | null;
  productTotalCount: number;
  page: number;
  createProduct: (newProduct: IProductCreate) => void;
  getProducts: () => void;
  getOneProduct: (id: number) => void;
  editProduct: (newProduct: Product) => void;
  deleteProduct: (id: number) => void;
  setPage: (num: number) => void;
  fetchByParams: (category: string, value: string) => void;

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
  productTotalCount: number;
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
  type: "productTotalCount";
  payload: number;
}

export type TProductAction =
  | IProductsAction
  | IProductAction
  | IPageTotalCountAction;
