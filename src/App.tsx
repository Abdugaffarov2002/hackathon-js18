import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import ProductContext from "./context/ProductContext/ProductContext";

function App() {
  return (
    <div>
      <ProductContext>
        <Navbar />
        <MyRoutes />
      </ProductContext>
    </div>
  );
}

export default App;
