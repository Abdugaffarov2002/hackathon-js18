import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import ProductContext from "./context/ProductContext/ProductContext";
import AuthContext from "./context/AuthContext/AuthContext";
import Toastify from "./components/Toastify/Toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ProductContext>
        <AuthContext>
          <Toastify />
          <Navbar />
          <MyRoutes />
        </AuthContext>
      </ProductContext>
    </div>
  );
}

export default App;
