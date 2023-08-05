import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/catalog")}>Catalog</Button>
      <Button onClick={() => navigate("/add")}>Add</Button>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Navbar;
