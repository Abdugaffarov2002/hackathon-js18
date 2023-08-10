import { ICartProduct } from "../../models/cart";
import { Product } from "../../models/product";

export interface ICart {
  products: ICartProduct[];
  totalPrice: number;
}

export interface ICartContextTypes {
  cart: ICart;
  getCart: () => void;
  addProductToCart: (product: Product) => void;
  deleteProductFromCart: (id: number) => void;
  isAlreadyInCart: (id: number) => boolean;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  clearCart: () => void;
  saveProduct: (product: Product) => void;
  removeSavedProduct: (id: number) => void;
  getSavedProductsFromLS: () => void;
  clearLS: () => void;
}
