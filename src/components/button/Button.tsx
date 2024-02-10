import { COLOR, FONT_SIZE, SPACING } from "../../constants";

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  padding?: keyof typeof SPACING;
  rounded?: keyof typeof SPACING;
  fontSize?: keyof typeof FONT_SIZE;
  backgroundColor?: keyof typeof COLOR;
  color?: keyof typeof COLOR;
  border?: boolean;
  className?: string;
}

const Button = styled.button<ButtonProps>`
  justify-content: center;
  background: ${(props) =>
    props.backgroundColor ? COLOR[props.backgroundColor] : "white"};
  color: ${(props) => COLOR[props.color || "primary"]};
  padding: ${(props) => SPACING[props.padding || "sm"]};
  font-size: ${(props) => FONT_SIZE[props.fontSize || "md"]};
  border-radius: ${(props) => SPACING[props.rounded || "xsm"]};
  ${(props) =>
    props.border ? `border: 0.06em solid #d3d3d3;` : `border: none;`}
  width: auto;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export default React.memo(Button);
