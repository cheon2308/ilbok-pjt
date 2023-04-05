import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MainLogo from '../../assets/image/MainLogo.png'
import DefaultProfile from '../../assets/image/DefaultProfile.png'
import '../Layout/Navbar.css'
import LoginModal from '../LoginModal'
import BokBtn2 from '../Common/BokBtn2'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import { LoginState } from '../../atom'
import { GiHamburgerMenu } from 'react-icons/gi'
const NavbarContainer = styled.nav`
  align-items: center;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
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
  @media (max-width: 700px) {
    width: 100px;
    margin: 0 0 0 0;
  }
`
const ProfileImglogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 80px;
  padding: 0;

  @media (max-width: 700px) {
  
    flex-direction: column;
 
    margin: 0 0 0 0 ;
  }
}

`

const MenuItem = styled.li`
  margin: 0 30px 0 0;
  width: 100px;

  @media (max-width: 700px) {
    margin: 30px 0 30px 0;
    text-align: center;
    width: 100%;
  }
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
  const links = [{ title: '일자리', url: '/job' }]
  const [open, setOpen] = useState(false) // 로그인
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)
  const profileImg = window.localStorage.getItem('token')
    ? window.localStorage.getItem('profileImage') || DefaultProfile
    : undefined
  const userName = window.localStorage.getItem('token')
    ? window.localStorage.getItem('nickname') || 'unknown'
    : undefined

  const handleProfileClick = () => {
    navigate('/myprofile')
  }
  const logOut = () => {
    const kakaoId = window.localStorage.getItem('kakaoId')
    localStorage.removeItem('token')
    if (kakaoId) {
      axios
        .post(`https://kapi.kakao.com/v1/user/logout?target_id_type=user_id&target_id=${kakaoId}`, null, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'KakaoAK 8e9ad1637261abebf42881f8bb473ba3',
          },
        })
        .then((res) => {
          localStorage.removeItem('email')
          localStorage.removeItem('kakaoId')
          localStorage.removeItem('nickname')
          localStorage.removeItem('profileImage')
          localStorage.removeItem('token')
          setIsLoggedIn((prevState) => ({
            userId: 0,
            isLoggedIn: false,
          }))
          navigate('/')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
  const [test, setTest] = useState(false)
  return (
    <NavbarContainer>
      <div className="header-wrap">
        <div className="header-left-wrap">
          <div className="WebContainer">
            <Logo to="/">
              <LogoImg className="nav-logo" src={MainLogo} alt="MainLogo" />
            </Logo>
          </div>
          <div className="MobileContainer">
            <Logo to="/">
              <LogoImg
                className="nav-logo"
                src={MainLogo}
                alt="MainLogo"
                onClick={() => {
                  setTest(false)
                }}
              />
            </Logo>
            <div
              onClick={() => {
                setTest(!test)
              }}
            >
              <GiHamburgerMenu color="#76DCB0"></GiHamburgerMenu>
            </div>
          </div>
          {test === true ? (
            <div className="Mobile">
              <div>
                {window.localStorage.getItem('token') ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ProfileImglogo
                      src={profileImg}
                      alt=""
                      onClick={() => {
                        handleProfileClick()
                        setTest(false)
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <div style={{ marginLeft: '10px' }}>
                      <span style={{ color: '#76DCB0' }}>{userName}</span>
                      <span>님 반갑습니다.</span>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>

              <MenuList>
                {links.map((link) => (
                  <MenuItem key={link.title}>
                    <NavLinkItem
                      to={link.url}
                      className={({ isActive }) => (isActive ? 'active' : 'not')}
                      onClick={() => {
                        setTest(false)
                      }}
                    >
                      {link.title}
                    </NavLinkItem>
                  </MenuItem>
                ))}
              </MenuList>

              {window.localStorage.getItem('token') ? (
                <BokBtn2
                  sigwidth="125px"
                  sigheight="50px"
                  sigfontsize="19px"
                  sigborderradius={25}
                  sigmargin="10px"
                  onClick={() => {
                    logOut()

                    setTest(false)
                  }}
                >
                  로그아웃
                </BokBtn2>
              ) : null}
            </div>
          ) : null}

          <div className="Web">
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
        </div>
        <div className="header-right-wrap Web">
          {window.localStorage.getItem('token') ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ProfileImglogo src={profileImg} alt="" onClick={handleProfileClick} style={{ cursor: 'pointer' }} />
              <div style={{ marginLeft: '10px' }}>
                <span style={{ color: '#76DCB0' }}>{userName}</span>
                <span>님 반갑습니다.</span>
              </div>
              <BokBtn2
                sigwidth="125px"
                sigheight="50px"
                sigfontsize="19px"
                sigborderradius={25}
                sigmargin="10px"
                onClick={logOut}
              >
                로그아웃
              </BokBtn2>
            </div>
          ) : (
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
          )}
          <LoginModal open={open} onClose={handleClose}></LoginModal>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default NavBar
