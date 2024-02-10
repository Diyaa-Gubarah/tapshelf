import { Box, Button, Text } from "../../../../../components";

import React from "react";
import { useProductStore } from "../../../../../store";

type Props = {};

const ProductTableButtons = ({}: Props) => {
  const { products, showNext, showPrev ,page} = useProductStore();

  return (
    <Box align="center" justify="space-between" gap="lg" flex={1}>
      <Button
        onClick={() => {
          showPrev();
        }}
        color="text"
        border
      >
        <Box align="center" justify="center">
          <Text fontSize="sm">Previous</Text>
        </Box>
      </Button>
      <Text fontSize="sm">
        page {page} of {Math.round(products.length / 10)}
      </Text>
      <Button
        onClick={() => {
          showNext();
        }}
        color="text"
        border
      >
        <Box align="center" justify="center">
          <Text fontSize="sm">Next</Text>
        </Box>
      </Button>
    </Box>
  );
};

export default ProductTableButtons;
