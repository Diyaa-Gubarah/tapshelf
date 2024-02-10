import "./layout.css";

import { Dashboard, Inventory } from "../containers";
import { Header, SideNav, Text } from "../components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f2f2f2;
  height: 100%;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;
`;





function NoMatch() {
  return (
    <Empty>
      <Text fontSize="lg">Nothing to see here!</Text>
      <Text fontSize="sm">
        <Link to="/">Go to the home page</Link>
      </Text>
    </Empty>
  );
}
const Layout: React.FC = () => {
  return (
    <Router>
      <div className="layout">
        <SideNav />
        <Right>
          <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              {/* add more routes like: Report, Supplier, ...etc */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
        </Right>
      </div>
    </Router>
  );
};

export default Layout;
