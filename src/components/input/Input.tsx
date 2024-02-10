import { COLOR, FONT_SIZE, SPACING } from "../../constants";

import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: string;
  padding?: keyof typeof SPACING;
  fontSize?: keyof typeof FONT_SIZE;
  rounded?: keyof typeof SPACING;
  borderColor?: keyof typeof COLOR;
}

const StyledInput = styled.input<InputProps>`
  padding: ${(props) => SPACING[props.padding || "sm"]};
  border: ${(props) => `1px solid ${COLOR[props.borderColor || "text"]}`};
  border-radius: ${(props) => SPACING[props.rounded || "xsm"]};
  font-size: ${(props) => FONT_SIZE[props.fontSize || "md"]};
  font-weight: 400;
  display: flex;
  flex: 1;
  width: 100%;
`;

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  className,
  padding,
  fontSize,
  rounded,
  maxLength,
  name,
  defaultValue,
}) => {
  return (
    <StyledInput
      type="text"
      name={name}
      placeholder={placeholder}
      value={defaultValue}
      onChange={onChange}
      className={className}
      padding={padding}
      fontSize={fontSize}
      rounded={rounded}
      maxLength={maxLength}
    />
  );
};

export default React.memo(Input);
