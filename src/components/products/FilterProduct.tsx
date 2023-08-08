import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";

const FilterProduct = () => {
  const { fetchByParams } = useContext(productContext) as IProductContextType;
  return (
    <div>
      <Paper>
        <ToggleButtonGroup
          color="primary"
          exclusive
          onChange={(e, value) => fetchByParams("category", value)}
          aria-label="Platform"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="barca">Barca</ToggleButton>
          <ToggleButton value="real">Real</ToggleButton>
          <ToggleButton value="chelsy">Chelsy</ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </div>
  );
};

export default FilterProduct;
