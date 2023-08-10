import React, { FC, useContext, useEffect } from "react";
import { productContext } from "../context/ProductContext/ProductContext";
import { IProductContextType } from "../context/ProductContext/types";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Fab,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
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

const DetailsPage = () => {
  const { getOneProduct, product, deleteProduct } = useContext(
    productContext
  ) as IProductContextType;

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
        <Container
          sx={{
            display: "flex",
            padding: "0",
            margin: "0",
            width: "100%",
          }}
        >
          <Box sx={{ display: "grid", margin: "25px auto", gap: "10px" }}>
            <CardMedia
              sx={{ width: "700px" }}
              component="img"
              height="800px"
              image={product.image}
              alt={product.title}
            />
            <CardMedia
              sx={{ width: "700px" }}
              component="img"
              height="800px"
              image={product.image1}
              alt={product.title}
            />
            <CardMedia
              sx={{ width: "700px" }}
              component="img"
              height="800px"
              image={product.image2}
              alt={product.title}
            />
          </Box>
          <Card
            sx={{
              // marginTop: "",
              height: "100vh",
              position: "fixed",
              right: "10px",
              width: "390px",
            }}
          >
            <Container>
              <CardContent>
                <Typography
                  sx={{ display: "flex", fontSize: "24px" }}
                  gutterBottom
                  variant="h3"
                  component="div"
                >
                  {product.title}
                </Typography>
                <br />

                <Typography
                  sx={{ fontSize: "20px" }}
                  variant="h4"
                  color="text.secondary"
                  component={"div"}
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </Container>

            <Container sx={{ mb: "40px" }}>
              <Typography>Size</Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  sx={{
                    color: "white",
                    borderRadius: "50px",
                    backgroundColor: "#0068ff",
                  }}
                >
                  S
                </Button>
                <Button
                  sx={{
                    color: "white",
                    borderRadius: "50px",
                    backgroundColor: "#0068ff",
                  }}
                >
                  M
                </Button>
                <Button
                  sx={{
                    color: "white",
                    borderRadius: "50px",
                    backgroundColor: "#0068ff",
                  }}
                >
                  L
                </Button>
                <Button
                  sx={{
                    color: "white",
                    borderRadius: "50px",
                    backgroundColor: "#0068ff",
                  }}
                >
                  XL
                </Button>
                <Button
                  sx={{
                    color: "white",
                    borderRadius: "50px",
                    backgroundColor: "#0068ff",
                  }}
                >
                  2XL
                </Button>
              </Box>
            </Container>

            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => navigate(`/cart/${id}`)}
                sx={{
                  border: "1px solid aqua",
                  backgroundColor: "#fbc43f",
                  padding: "8px 50px",
                }}
              >
                <ShoppingBagOutlinedIcon />
                <Typography>ADD TO CART</Typography>
              </Button>
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
