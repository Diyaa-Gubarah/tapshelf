import { Box, Input, Text } from "../../../../../components";

import { Product } from "../../../../../types";
import React from "react";
import styled from "styled-components";

interface InputFieldProps {
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: keyof Product;
  defaultValue?: string;
}

const InputContainer = styled(Box)`
  & .input-label {
    flex: 0.35;
    min-width: max-content;
  }
  & .input-field {
    flex: 0.65;
    margin: 0;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  onChange,
  name,
  defaultValue,
}) => {
  return (
    <InputContainer
      align="center"
      gap="sm"
      flex={1}
      justify="space-between"
      wrap="wrap"
    >
      <Text textAlign="left" fontSize="sm" className="input-label">
        {label}
      </Text>
      <Input
        fontSize="sm"
        className="input-field"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e)}
        name={name}
        defaultValue={defaultValue}
      />
    </InputContainer>
  );
};

export default React.memo(InputField);
