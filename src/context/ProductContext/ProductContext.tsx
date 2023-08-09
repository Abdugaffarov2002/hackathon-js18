import { FC, useReducer, createContext, useState } from "react";

import React from "react";
import { IInitState, IProductContextType, TProductAction } from "./types";
import { IProductCreate, Product } from "../../models/product";
import axios from "axios";
import { API, Limit } from "../../models/const";
import { useNavigate } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
  children: React.ReactNode;
}

const initState: IInitState = {
  products: [],
  productTotalCount: 0,
  product: null,
};

function reducer(state: IInitState, action: TProductAction) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "product":
      return { ...state, product: action.payload };
    case "productTotalCount":
      return {
        ...state,
        productTotalCount: action.payload,
      };
    default:
      return state;
  }
}

const ProductContext: FC<IProductContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const location = useLocation();

  const [paginateParams, setPaginateParms] = useSearchParams();
  const [page, setPage] = useState<number>(
    +(paginateParams.get("_page") as string) || 1
  );

  async function createProduct(newProduct: IProductCreate) {
    await axios.post(API, newProduct);
    navigate("/catalog");
  }

  async function getProducts() {
    const { data, headers } = await axios.get<Product[]>(
      `${API}${window.location.search}`
    );
    const count = Math.ceil(headers["x-total-count"] / Limit);

    dispatch({
      type: "productTotalCount",
      payload: count,
    });
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

  function fetchByParams(category: string, value: string) {
    const paramsFromUrl = new URLSearchParams(location.search);
    if (value === "all") {
      paramsFromUrl.delete(category);
    } else {
      paramsFromUrl.set(category, value);
    }
    const url = `${location.pathname}? ${paramsFromUrl.toString()}`;
    navigate(url);
  }

  function likeProduct(id: number) {
    const productToLike = state.products.find((product) => product.id === id);

    if (productToLike) {
      axios
        .patch(`${API}/${id}`, { likes: productToLike.likes + 1 })
        .then((response) => {
          const updatedProduct = {
            ...productToLike,
            likes: response.data.likes,
          };
          const updatedProducts = state.products.map((product) =>
            product.id === id ? updatedProduct : product
          );

          dispatch({
            type: "products",
            payload: updatedProducts,
          });
          getOneProduct(id);
        })
        .catch((error) => {
          console.error("Ошибка при лайке продукта:", error);
        });
    }
  }

  const value = {
    products: state.products,
    product: state.product,
    productTotalCount: state.productTotalCount,
    page,
    likeProduct,
    getProducts,
    createProduct,
    getOneProduct,
    editProduct,
    deleteProduct,
    setPage,
    fetchByParams,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
