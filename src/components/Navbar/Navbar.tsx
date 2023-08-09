import { Box, Button, Input, Link, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import { authContext } from "../../context/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../context/AuthContext/types";

const Navbar = () => {
  const { user, logout, isAdmin } = React.useContext(
    authContext
  ) as IAuthContextTypes;

  const { getProducts, setPage } = useContext(
    productContext
  ) as IProductContextType;
  const navigate = useNavigate();
  const location = useLocation();

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
      <Box display="flex" sx={{ flexGrow: 2 }}>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/catalog?_page=1&_limit=4")}>
          Catalog
        </Button>
        {isAdmin() && (
          <Button component={Link} onClick={() => navigate("/add")}>
            Add
          </Button>
        )}
        {user ? (
          <Box display="flex" alignItems="center" px={2} gap={1}>
            <Typography>{user.email}</Typography>
            <Button onClick={logout}>Logout</Button>
          </Box>
        ) : (
          <Button component={Link} onClick={() => navigate("/auth/id")}>
            Login
          </Button>
        )}
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search"
        />
      </Box>
    </div>
  );
};

export default Navbar;
