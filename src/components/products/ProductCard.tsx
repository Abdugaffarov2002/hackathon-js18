import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Product } from "../../models/product";
import { Link } from "react-router-dom";

interface ProductItemProps {
  item: Product;
}

const ProductCard: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <Grid item xs={8} md={6} lg={4}>
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia sx={{ height: 140 }} image={item.image} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>{item.title}</h3>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "none" }}
            component={Link}
            to="/details"
          >
            <h4>description:</h4>
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>
              Price:$
              {item.price}
            </h4>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
