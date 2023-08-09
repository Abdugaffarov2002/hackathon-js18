import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { productContext } from "../context/ProductContext/ProductContext";
import { IProductContextType } from "../context/ProductContext/types";
import { useNavigate, useParams } from "react-router-dom";
import { TCategory } from "../models/product";

const defaultTheme = createTheme();

export default function EditProduct() {
  const { product, editProduct, getOneProduct } = React.useContext(
    productContext
  ) as IProductContextType;

  const navigate = useNavigate();

  const [newProduct, setNewProduct] = React.useState({
    id: 1,
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const { id } = useParams();

  React.useEffect(() => {
    id && getOneProduct(+id);
  }, []);

  React.useEffect(() => {
    if (product) {
      setNewProduct({ ...product, price: product.price.toString() });
    }
  }, [product]);

  function handleSaveChanges(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !newProduct.title.trim() ||
      !newProduct.description.trim() ||
      !newProduct.price.trim() ||
      !newProduct.image.trim()
    ) {
      alert("fill all fields");
      return;
    }

    editProduct({
      ...newProduct,
      price: +newProduct.price,
      category: newProduct.category as TCategory,
      likes: 0,
    });

    navigate("/catalog");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Change Product
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="Title"
              name="title"
              onChange={handleSaveChanges}
              value={newProduct.title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              placeholder="Description"
              onChange={handleSaveChanges}
              value={newProduct.description}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              placeholder="Price"
              onChange={handleSaveChanges}
              value={newProduct.price}
              type="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              placeholder="URL of Image"
              onChange={handleSaveChanges}
              value={newProduct.image}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                label="Category"
                onChange={handleSaveChanges}
                value={newProduct.category}
              >
                <MenuItem value={"barca"}>Barsa</MenuItem>
                <MenuItem value={"real"}>Real</MenuItem>
                <MenuItem value={"chelsy"}>Chelsy</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
