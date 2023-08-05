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
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import { TCategory } from "../../models/product";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
};

export default function InputForm() {
  const { createProduct } = React.useContext(
    productContext
  ) as IProductContextType;

  const [product, setProduct] = React.useState(init);

  function handleInput(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const addProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !product.title.trim() ||
      !product.description.trim() ||
      !product.image.trim()
    ) {
      alert("fill all fields");
      return;
    }

    createProduct({
      ...product,
      price: +product.price,
      category: product.category as TCategory,
    });
    setProduct(init);
  };

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
            Add New Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={addProduct}>
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="Title"
              name="title"
              onChange={handleInput}
              value={product.title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              placeholder="Description"
              onChange={handleInput}
              value={product.description}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              placeholder="Price"
              onChange={handleInput}
              value={product.price}
              type="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              placeholder="URL of Image"
              onChange={handleInput}
              value={product.image}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                label="Category"
                onChange={handleInput}
                value={product.category}
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
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
