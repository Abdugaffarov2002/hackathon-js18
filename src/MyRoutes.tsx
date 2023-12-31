import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage";
import SuccessPage from "./pages/SuccessPage";

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
  {
    link: "/details/:id",
    element: <DetailsPage />,
    id: 4,
  },
  {
    link: "/cart/:id",
    element: <CartPage />,
    id: 5,
  },
  {
    link: "/",
    element: <HomePage />,
    id: 6,
  },
  {
    link: "/auth/:id",
    element: <AuthPage />,
    id: 7,
  },
  {
    link: "/success",
    element: <SuccessPage />,
    id: 8,
  },
];

const MyRoutes = () => {
  return (
    <Routes>
      {MainRoutes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      <Route />
    </Routes>
  );
};

export default MyRoutes;
