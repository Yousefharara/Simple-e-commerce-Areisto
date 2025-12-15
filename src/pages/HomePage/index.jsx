import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Page
      <button onClick={() => navigate(PATHS.PRODUCTS.ROOT)}>products</button>
    </div>
  );
};

export default HomePage;
