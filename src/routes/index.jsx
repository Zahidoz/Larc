import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);
