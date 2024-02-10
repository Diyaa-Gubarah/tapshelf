// Products.tsx

import { ProductFilters, ProductList } from "./atom";

import React from "react";

const Products: React.FC = () => {
  return (
    <section>
      <ProductFilters />
      <ProductList />
    </section>
  );
};

export default Products;
