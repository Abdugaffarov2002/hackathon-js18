import React, { FC, ReactNode, createContext, useState } from "react";
import { ICart, ICartContextTypes } from "./types";
import { Product } from "../../models/product";
import { ICartProduct } from "../../models/cart";
import { notify } from "../../components/Toastify/Toastify";
export const cartContext = createContext<ICartContextTypes | null>(null);

const initState: ICart = {
  products: [],
  totalPrice: 0,
};

interface ICartContextProps {
  children: ReactNode;
}

function getCartFromLS(): ICart {
  const data = JSON.parse(localStorage.getItem("cart") as string);
  if (!data) {
    return initState;
  }

  return data;
}

function setCartToLS(cart: ICart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function calcTotalPrice(products: ICartProduct[]): number {
  return products.reduce((acc, item) => acc + item.subPrice, 0);
}

const CartContext: FC<ICartContextProps> = ({ children }) => {
  const [cart, setCart] = useState(initState);

  function getCart() {
    const data = getCartFromLS();
    setCart(data);
  }

  function addProductToCart(product: Product) {
    const data = getCartFromLS();
    data.products.push({ ...product, count: 1, subPrice: product.price });

    data.totalPrice = calcTotalPrice(data.products);
    setCartToLS(data);
    getCart();
    notify("succesfully added to cart");
  }

  function deleteProductFromCart(id: number) {
    const data = getCartFromLS();

    data.products = data.products.filter((item) => item.id !== id);

    data.totalPrice = calcTotalPrice(data.products);

    setCartToLS(data);
    getCart();
    notify("Successfully removed from cart");
  }
  function clearLS() {
    localStorage.clear();
  }

  function isAlreadyInCart(id: number): boolean {
    const data = getCartFromLS();
    const isInCart = data.products.some((item) => item.id === id);

    return isInCart;
  }

  function increaseCount(id: number) {
    const data = getCartFromLS();

    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += item.price;
      }
      return item;
    });

    data.totalPrice = calcTotalPrice(data.products);

    setCartToLS(data);
    getCart();
  }

  function decreaseCount(id: number) {
    const data = getCartFromLS();

    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= item.price;
      }
      return item;
    });

    data.totalPrice = calcTotalPrice(data.products);

    setCartToLS(data);
    getCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  const value = {
    cart,
    getCart,
    addProductToCart,
    deleteProductFromCart,
    isAlreadyInCart,
    increaseCount,
    decreaseCount,
    clearCart,
    clearLS,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
