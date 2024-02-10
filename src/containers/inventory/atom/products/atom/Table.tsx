import { Text } from "../../../../../components";
import styled from "styled-components";
import { useProductStore } from "../../../../../store";

const TableContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  flex: 1;
  justify-content: space-between;
`;

const TableCell = styled.td`
  flex: 1;
  min-width: max-content; /* Set minimum width for each cell */
  align-items: center;
  align-self: center;
`;

const ProductTable = () => {
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

  return (
    <Table>
      <TableContainer>
        <TableHead>
          <TableRow>
            {columns.map((header) => (
              <TableCell key={header}>
                <Text fontSize="sm" color="completed" textAlign="right">
                  {header}
                </Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {visibleProducts.map((product, index) => (
            <TableRow key={index}>
              {Object.values(product)
                .slice(0, 6)
                .map((column) => (
                  <TableCell key={column}>
                    <Text fontSize="sm">{column}</Text>
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </Table>
  );
};

export default ProductTable;
