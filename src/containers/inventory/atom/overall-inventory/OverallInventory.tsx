// OverallInventory.tsx

import { Box, Text } from "../../../../components";

import { Card } from "./atom";
import { INVENTORYS } from "../../../../types";
import { INVENTORY_DATA } from "../../../../data";
import React from "react";
import styled from "styled-components";

const Divider = styled(Box)<{ last: boolean }>`
  ${(props) => !props.last && `border-right: 0.06em solid #d3d3d3;`}
  @media (max-width: 496px) {
    border-right: none;
  }
  @media (max-width: 430px) {
    border-radius: 0;
  }
`;

const OverallInventory: React.FC = () => {
  const renderItem = (item: INVENTORYS) => (
    <Divider
      gap="lg"
      key={item.left.title}
      flex={1}
      padding="md"
      last={item?.last || false}
    >
      <Box flex={1} gap="lg" justify="space-between">
        <Card {...item.left} />
        {item.right && <Card {...item.right} />}
      </Box>
    </Divider>
  );

  return (
    <Box
      direction="column"
      gap="lg"
      backgroundColor="white"
      flex={1}
      padding="lg"
      rounded="sm"
    >
      <Text fontSize="md" fontWeight="600">
        Overall Inventory
      </Text>
      <Box flex={1} wrap="wrap" gap="sm">
        {React.Children.toArray(INVENTORY_DATA.map((item) => renderItem(item)))}
      </Box>
    </Box>
  );
};

export default OverallInventory;
