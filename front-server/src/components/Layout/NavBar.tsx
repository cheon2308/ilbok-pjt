import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MainLogo from '../../assets/image/MainLogo.png'
import '../Layout/Navbar.css'
import LoginModal from '../LoginModal'
import BokBtn2 from '../Common/BokBtn2'

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
  width: 150px;
  margin: 0 0 0 10px;
`

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 80px;
  padding: 0;
`

const MenuItem = styled.li`
  margin: 0 30px 0 0;
  width: 100px;
`

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #666666;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: #76dcb0;
  }
  &.active {
    color: #76dcb0;
  }
`

const NavBar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const links = [
    { title: '일자리', url: '/job' },
    { title: '복지', url: '/welfare' },
  ]
  const [open, setOpen] = useState(false) // 로그인
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <NavbarContainer>
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Logo to="/">
            <LogoImg className="nav-logo" src={MainLogo} alt="MainLogo" />
          </Logo>
          <MenuList>
            {links.map((link) => (
              <MenuItem key={link.title}>
                <NavLinkItem to={link.url} className={({ isActive }) => (isActive ? 'active' : 'not')}>
                  {link.title}
                </NavLinkItem>
              </MenuItem>
            ))}
          </MenuList>
        </div>
        <div className="header-right-wrap">
          <BokBtn2
            sigwidth="125px"
            sigheight="50px"
            sigfontsize="19px"
            sigborderradius={25}
            sigmargin="10px"
            onClick={handleOpen}
          >
            로그인
          </BokBtn2>
          <LoginModal open={open} onClose={handleClose}></LoginModal>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default NavBar
