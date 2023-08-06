import { FC, useReducer, createContext } from "react";

import React from "react";
import { IInitState, IProductContextType, TProductAction } from "./types";
import { IProductCreate, Product } from "../../models/product";
import axios from "axios";
import { API } from "../../models/const";
import { useNavigate } from "react-router";

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
    case "product":
      return { ...state, product: action.payload };
    default:
      return state;
  }
}

const ProductContext: FC<IProductContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();

  async function createProduct(newProduct: IProductCreate) {
    await axios.post(API, newProduct);
    navigate("/catalog");
  }

  async function getProducts() {
    const { data } = await axios(API);
    dispatch({
      type: "products",
      payload: data,
    });
  }

  async function getOneProduct(id: number) {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "product",
      payload: data,
    });
  }

  async function editProduct(newProduct: Product) {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts();
  }

  async function deleteProduct(id: number) {
    await axios.delete(`${API}/${id}`);
    getProducts();
    navigate("/catalog");
  }

  //   async function deleteProductDetails(id: number) {
  //     await axios.delete(`${API}/${id}`);
  //     getProducts();
  //   }

  const value = {
    products: state.products,
    product: state.product,
    getProducts,
    createProduct,
    getOneProduct,
    editProduct,
    deleteProduct,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
