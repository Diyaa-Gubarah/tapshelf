import { Box, Icon, Text } from "../..";

import { FONT_SIZE } from "../../../constants";
import React from "react";
import { useLocation } from "react-router-dom";

interface LinkItemProps {
  icon: string;
  text: string;
  to: string;
  fontSize?: keyof typeof FONT_SIZE;
}

const LinkItem: React.FC<LinkItemProps> = ({ icon, text, fontSize, to }) => {
  const { pathname } = useLocation();
  const isActive = React.useMemo(() => pathname === to, [to,pathname]);
  return (
    <Box align="center" gap="lg" flex={1}>
      <Icon color={isActive ? "primary" : "text"}>{icon}</Icon>
      <Text
      fontWeight="bold"
        fontSize={fontSize || "sm"}
        fontType="header"
        color={isActive ? "primary" : "text"}
      >
        {text}
      </Text>
    </Box>
  );
};

export default LinkItem;
