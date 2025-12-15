import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { PATHS } from "./paths";
import ProductsPage from "../pages/ProductsPage";
import ShowProductPage from "../pages/ShowProductPage";
import PageNotFound from "../pages/PageNotFound";

const productsRoutes = {
  path: PATHS.PRODUCTS.ROOT,
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <ProductsPage />,
    },
    {
      path: PATHS.PRODUCTS.SHOW,
      element: <ShowProductPage />,
    },
    {
      path: PATHS.PRODUCTS.FILTER,
      element: <ProductsPage />,
    },
  ],
};

export const routes = [
    productsRoutes,
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />,
  },
];
