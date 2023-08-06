import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Product } from "../../models/product";
import { useNavigate, useParams } from "react-router-dom";
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
import { Container } from "@mui/system";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";

interface ProductItemProps {
  item: Product;
}

const ProductCard: React.FC<ProductItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { deleteProduct } = React.useContext(
    productContext
  ) as IProductContextType;

  console.log("proCardItem", item);

  return (
    <Grid item xs={8} md={6} lg={4}>
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={item.image}
          title={item.title}
          onClick={() => navigate(`/details/${item.id}`)}
        />
        <CardContent onClick={() => navigate(`/details/${item.id}`)}>
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            description:
            {item.description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Price:$
            {item.price}
          </Typography>
        </CardContent>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <ShoppingBagOutlinedIcon
            sx={{ margin: 1 }}
            onClick={() => navigate(`/cart/${item.id}`)}
          />

          <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{
                root: { variant: "contained", color: "neutral" },
              }}
              sx={{ mr: "-25px" }}
            >
              <MoreVert />
            </MenuButton>
            <Menu placement="bottom-end">
              <MenuItem onClick={() => navigate(`/edit/${item.id}`)}>
                <ListItemDecorator>
                  <Edit />
                </ListItemDecorator>
                Edit
              </MenuItem>
              <MenuItem
                variant="soft"
                color="danger"
                onClick={() => deleteProduct(item.id)}
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
    </Grid>
  );
};

export default ProductCard;
