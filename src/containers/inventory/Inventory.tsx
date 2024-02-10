import { OverallInventory, Products } from "./atom";

import styled from "styled-components";

type Props = {};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1em;
  gap: 1em;
  @media (max-width: 430px) {
    margin: 0;
    gap: 0;
  }
`;

const Inventory = ({}: Props) => {
  return (
    <Container>
      <OverallInventory />
      <Products />
    </Container>
  );
};

export default Inventory;
