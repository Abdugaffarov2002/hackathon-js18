import { Button, Input, Link } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";

const Navbar = () => {
  const { getProducts, setPage } = useContext(
    productContext
  ) as IProductContextType;
  let navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const currentParams = Object.fromEntries([...searchParams]);

  useEffect(() => {
    setSearchParams({
      ...currentParams,
      q: search,
    });
    setPage(1);
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/catalog?_page=1&_limit=4")}>
        Catalog
      </Button>
      <Button onClick={() => navigate("/add")}>Add</Button>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search"
      />
    </div>
  );
};

export default Navbar;
