import React, { createContext, useContext, useEffect, useState } from "react";
import UseApi from "../hooks/useApi";
import axios from "axios";
import { API_URL } from "../config/api";
import { API_PATH } from "../constant/api";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsStore, setProductsStore] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const apiData = UseApi();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(API_URL + API_PATH.GET_ALL_PRODCUTS);
        data.products.map((item) =>
          setProductsStore((prev) => ({
            ...prev,
            [item.id]: 0,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // ! button to add data
  const addToData = (id) => {
    let product = Object.keys(productsStore).find(
      (item) => Number(item) === id
    );
    setProductsStore((prev) => ({
      ...prev,
      [product]: prev[product] + 1,
    }));
  };

  // ! button to remove form data
  const removeFromData = (id) => {
    let product = Object.keys(productsStore).find(
      (item) => Number(item) === id
    );
    setProductsStore((prev) => ({
      ...prev,
      [product]: prev[product] - 1,
    }));
  };

  // ! cart items
  const getTotal = () => {
    let total = 0;
    for (const obj in productsStore) {
      if (productsStore[obj] > 0) {
        total += productsStore[obj];
      }
    }
    return total;
  };

  return (
    <ProductContext.Provider
      value={{
        addToData,
        removeFromData,
        getTotal,
        productsStore,
        selectedCategory,
        setSelectedCategory,
        setProductsStore,
        ...apiData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
