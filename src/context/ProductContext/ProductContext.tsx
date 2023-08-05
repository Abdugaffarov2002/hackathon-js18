import { FC, useReducer, createContext } from "react";

import React from "react";
import { IInitState, IProductContextType, TProductAction } from "./types";
import { IProductCreate } from "../../models/product";
import axios from "axios";
import { API } from "../../models/const";

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
  children: React.ReactNode;
}

const initState: IInitState = {
  products: [],
  pageTotalCount: 0,
  product: null,
};

function reducer(state: IInitState, action: TProductAction) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };

    default:
      return state;
  }
}

const ProductContext: FC<IProductContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    const { data } = await axios(API);
    dispatch({
      type: "products",
      payload: data,
    });
  }

  async function createProduct(newProduct: IProductCreate) {
    await axios.post(API, newProduct);
  }

  const value = {
    products: state.products,
    getProducts,
    createProduct,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
