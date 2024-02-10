import { Box, Icon, Image, Input } from "..";

import { IMAGES } from "../../constants";
import styled from "styled-components";

type Props = {};

const Container = styled(Box)`
  position: sticky;
  top: 0;
  @media (max-width: 430px) {
    flex-direction: column-reverse;
    gap: var(--padding-md);
    padding: var(--padding-sm);
    & .profile_container {
      width: 100%;
      justify-content: space-between;
      font-size: 0.75em;
    }

    & .profile {
      /* width: 2.25em;
      height: 2.25em; */
    }
  }
`;

const Header = ({}: Props) => {
  return (
    <Container align="center" gap="lg" backgroundColor="white" padding="lg">
      <Input
        placeholder="Search product, supplier, order"
        fontSize="sm"
        padding="md"
      />

      <Box gap="lg" align="center" className="profile_container">
        <Icon size={"lg"} color="text">
          notifications
        </Icon>
        <Image
          alt="Logo"
          src={IMAGES.profile}
          width="3em"
          height="3em"
          className="profile"
        />
      </Box>
    </Container>
  );
};

export default Header;
