import React from "react";

import { Nav, NavLink, NavMenu } from "./styledComponents";

const Header = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "#ffffff" }}>
            Home
          </NavLink>
          <NavLink to="/traditional" activeStyle={{ color: "#ffffff" }}>
            Traditional
          </NavLink>
          <NavLink to="/react-query" activeStyle={{ color: "#ffffff" }}>
            React Query
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Header;
