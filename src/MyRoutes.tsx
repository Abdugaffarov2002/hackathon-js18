import React from "react";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";

export const MainRoutes = [
  {
    link: "/add",
    element: <AddProductPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditProductPage />,
    id: 2,
  },
  {
    link: "/catalog",
    element: <CatalogPage />,
    id: 3,
  },
];

const MyRoutes = () => {
  return (
    <Routes>
      {MainRoutes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
