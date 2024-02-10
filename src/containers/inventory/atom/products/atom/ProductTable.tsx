import { Box, Text } from "../../../../../components";

import React from "react";
import styled from "styled-components";
import { useProductStore } from "../../../../../store";

// Row Component
interface RowProps {
  columns: (string | number)[];
  header?: boolean;
}

const StyledRow = styled.div<{ header?: boolean }>`
  display: flex;
  border-bottom: 0.05em solid #d3d3d3;
  width: 100%;
  padding: var(--padding-sm);
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

const Row: React.FC<RowProps> = ({ columns, header }) => (
  <StyledRow>
    {React.Children.toArray(
      columns.map((row_data) => (
        <Text
          fontSize="sm"
          fontWeight={header ? "bold" : "none"}
          color={header ? "completed" : "text"}
        >
          {row_data}
        </Text>
      ))
    )}
  </StyledRow>
);

const StyledProductTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const ProductTable: React.FC = () => {
  const { visibleProducts } = useProductStore();
  const columns = visibleProducts.length
    ? Object.keys(visibleProducts[0]).slice(0, 6)
    : [
        "Products",
        "Buying Price",
        "Quantity",
        "Threshold Value",
        "Expiry Date",
        "Availability",
      ];

  const rows = React.useMemo(
    () =>
      visibleProducts.map((product) => (
        <Row
          key={product.productId}
          columns={Object.values(product).slice(0, 6)}
        />
      )),

    [visibleProducts.length]
  );

  return (
    <StyledProductTableContainer>
      {visibleProducts.length > 0 && (
        <>
          <Row columns={columns} header />
          {rows}
        </>
      )}
    </StyledProductTableContainer>
  );
};

export default ProductTable;
