import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import "../products/ProductCard/ProductCard.css";
const FilterProduct = () => {
  const { fetchByParams } = useContext(productContext) as IProductContextType;
  return (
    <div>
      <Paper
        className="paper"
        sx={{ width: "471px", backgroundColor: "#263238" }}
      >
        <ToggleButtonGroup
          className="filter"
          sx={{ backgroundColor: "#263238" }}
          exclusive
          onChange={(e, value) => fetchByParams("category", value)}
          aria-label="Platform"
        >
          <ToggleButton sx={{ color: "#f5f5f5", fontSize: "12px" }} value="all">
            All
          </ToggleButton>
          <ToggleButton sx={{ color: "#f5f5f5", fontSize: "12px" }} value="APL">
            APL
          </ToggleButton>
          <ToggleButton
            sx={{ color: "#f5f5f5", fontSize: "12px" }}
            value="LaLiga"
          >
            LaLiga
          </ToggleButton>
          <ToggleButton
            sx={{ color: "#f5f5f5", fontSize: "12px" }}
            value="Seria A"
          >
            Seria A
          </ToggleButton>
          <ToggleButton
            sx={{ color: "#f5f5f5", fontSize: "12px" }}
            value="Bundesliga"
          >
            Bundesliga
          </ToggleButton>
          <ToggleButton
            sx={{ color: "#f5f5f5", fontSize: "12px" }}
            value="Ligue 1"
          >
            Ligue 1
          </ToggleButton>
          <ToggleButton
            sx={{ color: "#f5f5f5", fontSize: "12px" }}
            value="Stars"
          >
            Stars
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </div>
  );
};

export default FilterProduct;
