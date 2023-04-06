import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import kakaologin from '../assets/image/kakao_login_medium_narrow.png'
import ilbok from '../assets/image/ilbok.png'
import { CgClose } from 'react-icons/cg'
import { Typography, TypographyProps } from '@mui/material'
import styled from 'styled-components'
const style = {
  width: '30%',
  minWidth: '250px',

  height: '50%',
  maxHeight: '300px',
  bgcolor: 'background.paper',
  borderRadius: 15,
  border: 'none',
  boxShadow: 24,
  p: 4,
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}
interface StyledTypographyProps extends TypographyProps {
  ishovered?: boolean
}

const StyledTypography = styled(({ ...typographyProps }: StyledTypographyProps) => (
  <Typography {...typographyProps} />
))<StyledTypographyProps>`
  cursor: pointer;
  color: ${(props) => (props.ishovered ? 'blue' : 'textSecondary')};

  &:hover {
    color: blue;
  }
`

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

function LoginModal({ open, onClose }: LoginModalProps) {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`
  const KAKAO_AUTH_URL_OTHER = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&prompt=login`
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }
  const handleLoginOther = () => {
    window.location.href = KAKAO_AUTH_URL_OTHER
  }
  const [ishovered, setishovered] = useState(false)

  const handleMouseEnter = () => {
    setishovered(true)
  }

  const handleMouseLeave = () => {
    setishovered(false)
  }
  //lottie

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div
            style={{
              position: 'absolute',
              right: 50,
              top: 30,
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            <CgClose size="24" color="gray" />
          </div>
          {/* <Lottie style={{ width: 120 }} animationData={animationData} loop autoplay /> */}
          <img src={ilbok} style={{ width: 100 }} />
          <br />
          <Typography fontSize={30} color="textPrimary">
            반갑습니다!
          </Typography>
          <Typography fontSize={20} color="textSecondary">
            일자리의 모든것, 일복
          </Typography>
          <br />
          <img src={kakaologin} onClick={handleLogin} style={{ cursor: 'pointer' }} />
          <br />
          <StyledTypography
            onClick={handleLoginOther}
            fontSize={14}
            ishovered={ishovered ? true : undefined}
            style={{ cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            다른 계정으로 로그인 하기
          </StyledTypography>
          {/* <BokBtn1
            sigwidth="30px"
            sigheight="30px"
            sigfontsize="14px"
            sigborderradius={25}
            sigmargin="30px auto"
            onClick={onClose}
          >
            닫기
          </BokBtn1> */}
          <br />
        </Box>
      </Modal>
    </>
  )
}

export default LoginModal
