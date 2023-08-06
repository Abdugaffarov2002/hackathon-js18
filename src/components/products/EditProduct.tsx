import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";

const EditProduct = () => {
  const { getOneProduct } = useContext(productContext) as IProductContextType;

  const { id } = useParams();

  React.useEffect(() => {
    id && getOneProduct(+id);
  }, []);
  return <div>EditProduct</div>;
};

export default EditProduct;
