import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import ProductContext from "./context/ProductContext/ProductContext";
import AuthContext from "./context/AuthContext/AuthContext";
import Toastify from "./components/Toastify/Toastify";
import CartContext from "./context/CartContext/CartContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ProductContext>
        <AuthContext>
          <CartContext>
            <Toastify />
            <Navbar />
            <MyRoutes />
          </CartContext>
        </AuthContext>
      </ProductContext>
    </div>
  );
}

export default App;
