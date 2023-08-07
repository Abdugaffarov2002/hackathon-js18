import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import ProductCard from "./ProductCard";
import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import { Limit } from "../../models/const";

const ProductList = () => {
  const { getProducts, products, productTotalCount, page, setPage } =
    useContext(productContext) as IProductContextType;

  const [paginateParams, setPaginateParms] = useSearchParams();
  // const [page, setPage] = useState<number>(
  //   +(paginateParams.get("_page") as string)
  //     ? +(paginateParams.get("_page") as string)
  //     : 1
  // );

  // const [limit, setLimit] = useState<number>(
  //   +(paginateParams.get("_limit") as string)
  //     ? +(paginateParams.get("_limit") as string)
  //     : Limit
  // );

  useEffect(() => {
    setPaginateParms({
      _page: page.toString(),
      _limit: Limit.toString(),
    });
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [paginateParams]);
  return (
    <>
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {products ? (
            products.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 5,
        }}
      >
        <Pagination
          color="primary"
          count={productTotalCount}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </>
  );
};

export default ProductList;
