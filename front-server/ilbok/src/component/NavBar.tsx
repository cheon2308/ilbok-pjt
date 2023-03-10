import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ilbokLogo from "../assets/ilbokLogo.png";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const LogoImg = styled.img`
  width: 110px;
  margin-right: 8px;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 0 8px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #666;
  }
`;

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const links = [
    { title: "Job", url: "/job" },
    { title: "Welfare", url: "/welfare" },
  ];
  return (
    <NavbarContainer>
      <Logo to="/">
        <LogoImg className="nav-logo" src={ilbokLogo} alt="ilbokLogo" />
      </Logo>
      <MenuList>
        {links.map((link) => (
          <MenuItem key={link.title}>
            <NavLinkItem to={link.url}>{link.title}</NavLinkItem>
          </MenuItem>
        ))}
      </MenuList>
    </NavbarContainer>
  );
};

export default NavBar;
