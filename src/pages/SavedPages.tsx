import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/CartContext/CartContext";
import { ICartContextTypes } from "../context/CartContext/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const SavedPages = () => {
  const {
    cart,
    isAlreadyInCart,
    deleteProductFromCart,
    addProductToCart,
    getSavedProductsFromLS,
  } = useContext(cartContext) as ICartContextTypes;

  useEffect(() => {
    getSavedProductsFromLS();
  }, []);

  return (
    <div>
      {cart.products.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            {isAlreadyInCart(item.id) ? (
              <IconButton
                onClick={() => deleteProductFromCart(item.id)}
                sx={{ margin: 1, cursor: "pointer" }}
              >
                <ShoppingBagIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton
                sx={{ margin: 1, cursor: "pointer" }}
                onClick={() => addProductToCart(item)}
              >
                <ShoppingBagOutlinedIcon />
              </IconButton>
            )}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default SavedPages;
