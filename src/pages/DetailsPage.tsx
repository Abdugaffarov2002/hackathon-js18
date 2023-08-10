import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContext/ProductContext";
import { IProductContextType } from "../context/ProductContext/types";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import { Product } from "../models/product";
import { cartContext } from "../context/CartContext/CartContext";
import { ICartContextTypes } from "../context/CartContext/types";

const DetailsPage = () => {
  const { getOneProduct, product, deleteProduct, likeProduct } = useContext(
    productContext
  ) as IProductContextType;

  const { addProductToCart, deleteProductFromCart, isAlreadyInCart } =
    useContext(cartContext) as ICartContextTypes;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getOneProduct(+id);
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <Container sx={{ mt: 8 }}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea sx={{ height: "auto", display: "flex", p: 2 }}>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "65%",
                }}
              >
                <CardMedia
                  sx={{ width: "100%", objectFit: "contain" }}
                  component="img"
                  height="90%"
                  image={product.image}
                  alt={product.title}
                />
                <CardMedia
                  sx={{ width: "100%", objectFit: "contain" }}
                  component="img"
                  height="90%"
                  image={product.image1}
                  alt={product.title}
                />
                <CardMedia
                  sx={{ width: "100%", objectFit: "contain" }}
                  component="img"
                  height="90%"
                  image={product.image2}
                  alt={product.title}
                />
              </Container>
              <Container sx={{ textAlign: "center" }}>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {product.title}
                  </Typography>
                  <br />
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    component={"div"}
                  >
                    {product.description}
                  </Typography>
                  <br />

                  <Typography
                    variant="h4"
                    color="text.secondary"
                    component={"div"}
                  >
                    {product.category}
                  </Typography>
                  <br />

                  <Typography
                    variant="h4"
                    color="text.secondary"
                    component={"div"}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
              </Container>
            </CardActionArea>

            <Container
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: 1,
                }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => likeProduct(product.id)}
                />

                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "150px",
                    fontSize: "22px",
                    ml: "-8px",
                  }}
                >
                  <p>{product.likes}</p>

                  <p>нравится</p>
                </Container>
              </Container>
              {isAlreadyInCart(product.id) ? (
                <IconButton
                  onClick={() => deleteProductFromCart(product.id)}
                  sx={{ margin: 1, cursor: "pointer" }}
                >
                  <ShoppingBagIcon color="primary" />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ margin: 1, cursor: "pointer" }}
                  onClick={() => addProductToCart(product)}
                >
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              )}

              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{
                    root: { variant: "contained", color: "neutral" },
                  }}
                >
                  <MoreVert />
                </MenuButton>
                <Menu placement="bottom-end">
                  <MenuItem onClick={() => navigate(`/edit/${id}`)}>
                    <ListItemDecorator>
                      <Edit />
                    </ListItemDecorator>
                    Edit
                  </MenuItem>
                  <MenuItem
                    variant="soft"
                    color="danger"
                    onClick={() => product && deleteProduct(product.id)}
                  >
                    <ListItemDecorator sx={{ color: "inherit" }}>
                      <DeleteForever />
                    </ListItemDecorator>
                    Delete
                  </MenuItem>

                  <ListDivider />
                </Menu>
              </Dropdown>
            </Container>
          </Card>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default DetailsPage;
