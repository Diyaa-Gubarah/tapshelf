import { Box, Image } from "..";

import { IMAGES } from "../../constants";
import { Link } from "react-router-dom";
import { LinkItem } from "./atom";
import React from "react";
import styled from "styled-components";

const Left = styled(Box)`
  max-width: max-content;
  height: 100vh;
  position: sticky;
  top: 0;

  @media (max-width: 430px) {
    align-items: center;
    max-width: min-content;
    padding: var(--padding-sm);
    border-right: 0.15em solid #f3f3f3;
    & .sidenav__link_container {
      span {
        display: none;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: center;

  @media (max-width: 430px) {
    height: unset;
  }
`;

const Links = () => {
  // Replace with your actual links and styling
  return (
    <Box direction="column" gap="lg" flex={1} justify="center">
      <Link to="/">
        <LinkItem icon="dashboard" text="Dashboard" to="/" />
      </Link>

      <Link to="/inventory">
        <LinkItem icon="inventory" text="Inventory" to="/inventory" />
      </Link>

      <Link to="/reports">
        <LinkItem icon="insert_chart" text="Report" to="/reports" />
      </Link>
      <Link to="/supplier">
        <LinkItem icon="account_circle" text="Supplier" to="/supplier" />
      </Link>
      <Link to="/orders">
        <LinkItem icon="warehouse" text="Orders" to="/orders" />
      </Link>
      <Link to="/manage_store">
        <LinkItem icon="store" text="Manage Store" to="/manage_store" />
      </Link>
    </Box>
  );
};

const SettingsGroup = () => {
  return (
    <Box direction="column" gap="lg">
      <Link to="/setting">
        <LinkItem icon="settings" text="Settings" to="/setting" />
      </Link>
      <Link to="/logout">
        <LinkItem icon="logout" text="Log  Out" to="/logout" />
      </Link>
    </Box>
  );
};

const SideNav: React.FC = () => {
  const [imagePath, setImagePath] = React.useState(IMAGES.logo);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 430) {
        setImagePath(IMAGES.logo_sm);
      } else {
        setImagePath(IMAGES.logo);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Left flex={1} direction="column" padding="lg">
      {/* LogoImage placeholder */}
      <ImageContainer>
        <Image alt="Logo" src={imagePath} width="100%" height="100%" />
      </ImageContainer>
      <Box
        direction="column"
        flex={1}
        justify="space-between"
        className="sidenav__link_container"
      >
        <Links />
        <SettingsGroup />
      </Box>
    </Left>
  );
};

export default SideNav;
