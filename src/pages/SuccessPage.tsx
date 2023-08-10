import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../context//CartContext//CartContext";
import { ICartContextTypes } from "../../src/context/CartContext/types";
import { useNavigate } from "react-router-dom";
import { runConfetti } from "../../src//models//confetti";

const SuccessPage = () => {
  const { clearCart } = useContext(cartContext) as ICartContextTypes;
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
    runConfetti();
    setTimeout(() => {
      navigate("/catalog");
    }, 5000);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h2">Thank you for your order!</Typography>
    </Box>
  );
};

export default SuccessPage;
