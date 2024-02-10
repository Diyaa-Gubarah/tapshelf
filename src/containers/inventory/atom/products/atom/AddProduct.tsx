import { Box, Button, Modal } from "../../../../../components";
import React, { useReducer } from "react";
import productReducer, { initialState } from "./reducer/productReducer";

import InputField from "./InputFiled";
import { ModalHandle } from "../../../../../components/modal/Modal";
import { Product } from "../../../../../types";
import styled from "styled-components";
import { useProductStore } from "../../../../../store";
import { validateForm } from "../utils";

const FormContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 1em;
  border-radius: 1em;
  background: #fff;
  max-width: 70%;
  height: 80%;
  overflow-y: auto;
  gap: 1em;
  @media (max-width: 430px) {
    padding: 0.75em;
    border-radius: 0.5em;
    width: 80%;
    height: 50%;
  }
`;

type Props = { modalRef: React.RefObject<ModalHandle>; closeModal: () => void };

const AddProduct = ({ modalRef, closeModal }: Props) => {
  const { addItem } = useProductStore();
  const [{ product }, dispatch] = useReducer(productReducer, initialState);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch({
        type: "UPDATE_FIELD",
        fieldName: name as keyof typeof product,
        value,
      });
    },
    [dispatch]
  );

  const handleAddProduct = React.useCallback(() => {
    // Validate the form
    const { falseKeys, isValid } = validateForm(product as Product);
    if (isValid) {
      // If form is valid, add item and reset form
      addItem(product as Product);
      dispatch({ type: "RESET_FORM" });
      closeModal();
    } else {
      // If form is not valid, show confirmation dialog
      const confirmation = window.confirm(
        `${falseKeys.join(", ")} are missing.`
      );
      if (confirmation || !confirmation) {
        // If confirmed, reset form and close modal
        dispatch({ type: "RESET_FORM" });
        closeModal();
      }
    }
  }, [product, addItem, dispatch, closeModal]);

  const discard = React.useCallback(() => {
    closeModal();
  }, []);

  return (
    <Modal ref={modalRef}>
      <FormContainer>
        <InputField
          label="Product Name"
          placeholder="Enter Product product name"
          onChange={onChange}
          defaultValue={product?.productName || ""}
          name="productName"
        />
        <InputField
          label="Product ID"
          placeholder="Enter product id"
          onChange={onChange}
          defaultValue={product?.productId?.toString() || ""}
          name="productId"
        />
        <InputField
          label="Category"
          placeholder="Select product category"
          onChange={onChange}
          defaultValue={product?.category || ""}
          name="category"
        />
        <InputField
          label="Buying Price"
          placeholder="Enter buying price"
          onChange={onChange}
          defaultValue={product?.buyingPrice?.toString() || ""}
          name="buyingPrice"
        />
        <InputField
          label="Quantity"
          placeholder="Enter product quantity"
          onChange={onChange}
          defaultValue={product?.quantity?.toString() || ""}
          name="quantity"
        />
        <InputField
          label="Unit"
          placeholder="Enter product unit"
          onChange={onChange}
          defaultValue={product?.unit || ""}
          name="unit"
        />
        <InputField
          label="Expiry Date"
          placeholder="Enter expiry date"
          onChange={onChange}
          defaultValue={product?.expiryDate || ""}
          name="expiryDate"
        />
        <InputField
          label="Threshold Value"
          placeholder="Enter threshold value"
          onChange={onChange}
          defaultValue={product?.thresholdValue?.toString() || ""}
          name="thresholdValue"
        />
        <Box align="center" justify="flex-end" gap="lg" flex={1}>
          <Button onClick={discard} color="text" fontSize="sm">
            Discard
          </Button>
          <Button
            onClick={handleAddProduct}
            backgroundColor="primary"
            color="background"
            fontSize="sm"
          >
            Add Product
          </Button>
        </Box>
      </FormContainer>
    </Modal>
  );
};

export default React.memo(AddProduct);
