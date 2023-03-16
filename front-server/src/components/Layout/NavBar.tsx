import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ilbokLogo from '../../assets/image/ilbokLogo.png'
import '../Layout/Navbar.css'
import LoginModal from '../LoginModal'

const NavbarContainer = styled.nav`
  diplay: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  position: sticky;
  top: 0;
`

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`

const LogoImg = styled.img`
  width: 110px;
  margin-right: 8px;
`

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  margin: 0 8px;
`

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #666;
  }
`

const NavBar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const links = [
    { title: 'Job', url: '/job' },
    { title: 'Welfare', url: '/welfare' },
  ]
  const [open, setOpen] = useState(false) // 로그인
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <NavbarContainer>
      <div className="header-wrap">
        <div className="header-left-wrap">
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
        </div>
        <div className="header-right-wrap">
          <div style={{ cursor: 'pointer' }} onClick={handleOpen}>
            로그인
          </div>
          <LoginModal open={open} onClose={handleClose}></LoginModal>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default NavBar
