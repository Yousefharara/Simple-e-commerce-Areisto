import CartItems from "../../components/CartItems";
import FilterCategory from "../../components/FilterCategory";
import Products from "../../components/Products";
import Container from "../../components/Container";
import "./style.css";

const ProductsPage = () => {

  return (
    <div className="products__page">
      <Container>
        <div className="products__page__content">
          <div className="title">
            <h3>Simple E-commerce Store</h3>
            <p>React Training: useState & useEffect Demo</p>
          </div>
          <CartItems />
          <FilterCategory />
          <Products />
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
