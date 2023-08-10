import { Box, Button, Container, Input, Link, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import { IAuthContextTypes } from "../../context/AuthContext/types";
import { authContext } from "../../context/AuthContext/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { styled, alpha, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { cartContext } from "../../context/CartContext/CartContext";
import { ICartContextTypes } from "../../context/CartContext/types";
import { ThemeProvider } from "@emotion/react";

//-------------------------------------------------------------------------//
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
//-------------------------------------------------------------------------//

const Navbar = () => {
  const { getProducts, setPage } = useContext(
    productContext
  ) as IProductContextType;

  const { user, logout, isAdmin } = React.useContext(
    authContext
  ) as IAuthContextTypes;
  let navigate = useNavigate();
  // ----------------------------------------------------------------------------//

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAdmin() && (
        <Box display="flex" justifyContent="center">
          <Button component={Link} onClick={() => navigate("/add")}>
            Add New Product
          </Button>
        </Box>
      )}
      {user ? (
        <Box
          display="flex"
          alignItems="center"
          px={2}
          gap={1}
          sx={{ flexDirection: "column" }}
        >
          <MenuItem> {user.email}</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Box>
      ) : (
        <Button component={Link} onClick={() => navigate("/auth/id")}>
          Login
        </Button>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <BookmarksIcon onClick={() => navigate("/saved/id")} />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon onClick={() => navigate("/cart/id")} />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  // ----------------------------------------------------------------------------//

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const currentParams = Object.fromEntries([...searchParams]);

  const { cart } = useContext(cartContext) as ICartContextTypes;

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#263238" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ cursor: "pointer" }}
              variant="h6"
              onClick={() => navigate("/")}
            >
              LOGO
            </Typography>
            <Container>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="h6"
                onClick={() => navigate("/catalog?_page=1&_limit=4")}
              >
                Catalog
              </Typography>
            </Container>

            <Search
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={5} color="error">
                  <BookmarksIcon onClick={() => navigate("/saved/id")} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ShoppingCartIcon onClick={() => navigate("/cart/id")} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};

export default Navbar;
