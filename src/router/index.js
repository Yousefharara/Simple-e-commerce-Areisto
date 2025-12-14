import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { PATHS } from "./paths";
import PageNotFound from "../pages/PageNotFound";
import ProductsPage from "../pages/ProductsPage";
import ShowProduct from "../pages/ShowProduct";

const Router = () => {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path={PATHS.PRODUCTS.ROOT} element={<Outlet />}>
        <Route index element={<ProductsPage />} />
        <Route path={PATHS.PRODUCTS.SHOW} element={<ShowProduct />} />
        <Route path={PATHS.PRODUCTS.FILTER} element={<ShowProduct />} />
      </Route>
      <Route path={PATHS.ERROR.PAGE_NOT_FOUND} element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} />} />
    </Routes>
  );
};

export default Router;
