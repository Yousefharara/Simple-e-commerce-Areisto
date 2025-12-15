import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

const Products = () => {
  const { name } = useParams();
  const {
    getProducts,
    getAllProducts,
    data,
    products,
    isLoading,
    addToData,
    selectedCategory,
    setSelectedCategory,
  } = useProductContext();

  useEffect(() => {
    getProducts();
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedCategory(name ? name : "all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className="products__list">
      {isLoading && <h2>Loading ...</h2>}
      {!isLoading && (
        <>
          {selectedCategory === "all"
            ? products.map((item) => {
                return (
                  <div className="product__item" key={item.id}>
                    <img src={item.images[0]} alt={item.title} />
                    <div className="product__item__content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <small>Category: {item.category}</small>
                      <div className="product__footer">
                        <div className="product__price">${item.price}</div>
                        <button
                          onClick={() => addToData(item.id)}
                          className="product__btn"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : data
                .filter((filtered) => filtered.category === selectedCategory)
                .map((item) => {
                  return (
                    <div className="product__item" key={item.id}>
                      <img src={item.images[0]} alt="Elef Anime" />
                      <div className="product__item__content">
                        {/* <h1>{num}</h1> */}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <small>Category: {item.category}</small>
                        <div className="product__footer">
                          <div className="product__price">${item.price}</div>
                          <button
                            onClick={() => addToData(item.id)}
                            className="product__btn"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
        </>
      )}
    </div>
  );
};

export default Products;
