import { Box, Button, Icon, Text } from "../../../../../components";

import { AddProduct } from ".";
import styled from "styled-components";
import { useModal } from "../../../../../hooks";

const ProductFilterContainer = styled(Box)`
  @media (max-width: 620px) {
    flex-direction: column;
    & .button-group {
      flex-wrap: wrap;
      justify-content: center;
      & * {
        min-width: 50%;
        align-self: center;
      }
    }
  }
`;

type Props = {};

const ProductFilters = ({}: Props) => {
  const { modalRef, openModal, closeModal } = useModal();
  return (
    <ProductFilterContainer align="center" justify="space-between" gap="lg">
      <AddProduct modalRef={modalRef} closeModal={closeModal} />
      <Text fontSize="md" fontWeight="600">
        Products
      </Text>
      <Box
        flex={1}
        gap="lg"
        align="center"
        justify="flex-end"
        className="button-group"
      >
        <Button
          onClick={openModal}
          color="background"
          backgroundColor="primary"
        >
          <Box align="center" justify="center">
            <Text fontSize="sm" color="background">
              Add Product
            </Text>
          </Box>
        </Button>
        <Button onClick={() => alert("ADD PRODUCT")} color="text" border>
          <Box align="center" gap="sm" justify="center">
            <Icon color="text" size="sm">
              filter_list
            </Icon>
            <Text fontSize="sm">Filters</Text>
          </Box>
        </Button>
        <Button onClick={() => alert("ADD PRODUCT")} color="text" border>
          <Box align="center" justify="center">
            <Text fontSize="sm">Download All</Text>
          </Box>
        </Button>
      </Box>
    </ProductFilterContainer>
  );
};

export default ProductFilters;
