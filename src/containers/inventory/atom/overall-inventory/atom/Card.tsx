import { Box, Text } from "../../../../../components";

import { INVENTORY } from "../../../../../types";
import React from "react";
import styled from "styled-components";

const CardWrapper = styled(Box)`
  min-width: max-content;
  & .header {
    margin-bottom: 0.5em;
  }
`;

const Card: React.FC<Partial<INVENTORY>> = ({ description, title, value }) => {
  return (
    <CardWrapper direction="column" justify="flex-end">
      <Text fontSize="sm" fontWeight="bold" color="primary" className="header">
        {title}
      </Text>
      <Text fontSize="sm" color="text" fontWeight="600">
        {value}
      </Text>
      <Text fontSize="sm" color="completed">
        {description}
      </Text>
    </CardWrapper>
  );
};

export default Card;
