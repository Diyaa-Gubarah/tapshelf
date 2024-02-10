import { ProductFilters, ProductTableButtons, Table } from "./atom";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #fff;
  flex: 1;
  padding: 1em;
  border-radius: 1em;
  width: 100%;
  @media (max-width: 430px) {
    border-radius: 0;
  }
`;

const Products: React.FC = () => {
  return (
    <Wrapper>
      <ProductFilters />
      {/* <ProductTable /> */}
      <Table />
      <ProductTableButtons />
    </Wrapper>
  );
};

export default Products;
