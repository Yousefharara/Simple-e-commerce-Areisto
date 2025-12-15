import React, { useEffect } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useProductContext } from "../../context/ProductContext";

const FilterCategory = () => {
  const {
    getCategories,
    categories,
    isLoading,
    selectedCategory,
  } = useProductContext();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filter__category">
      <h4>Filter by Category:</h4>
      <article className="list__category">
        {isLoading && <p>Loading ...</p>}
        {!isLoading && (
          <>
            <Link to={PATHS.PRODUCTS.ROOT} className={`category ${selectedCategory === 'all' ? 'active': ''}`}>
              All Products
            </Link>
            {categories.map((category) => (
              <NavLink
                to={PATHS.PRODUCTS.FILTER.replace(":name", category.slug)}
                className={`category`}
                key={category.slug}
              >
                {category.name}
              </NavLink>
            ))}
          </>
        )}
      </article>
    </div>
  );
};

export default FilterCategory;
