// Icon.tsx

import { COLOR, FONT_SIZE } from "../../constants";

import React from "react";
import styled from "styled-components";

interface IconProps {
  children: string;
  size?: keyof typeof FONT_SIZE | "none";
  color?: keyof typeof COLOR;
}

const StyledIcon = styled.i<IconProps>`
  font-size: ${(props) => FONT_SIZE[props.size || "lg"]};
  color: ${(props) => COLOR[props.color || "primary"]};
`;

const Icon: React.FC<IconProps> = ({ children, size, color }) => {
  return (
    <StyledIcon className="material-icons" size={size} color={color}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
