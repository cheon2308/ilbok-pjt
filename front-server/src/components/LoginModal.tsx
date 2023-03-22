import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import kakaologin from '../assets/image/kakao_login_medium_narrow.png'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
import BokBtn1 from './Common/BokBtn1'
import Lottie from 'lottie-react'
import animationData from '../assets/lottie/luckybag.json'
import { CgClose } from 'react-icons/cg'
import { Typography } from '@mui/material'
const style = {
  width: '30%',
  height: '50%',
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

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

function LoginModal({ open, onClose }: LoginModalProps) {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
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
          <Lottie style={{ width: 140 }} animationData={animationData} loop autoplay />
          <Typography fontSize={30} color="textPrimary">
            반갑습니다!
          </Typography>
          <Typography fontSize={20} color="textSecondary">
            일자리의 모든것, 일복
          </Typography>
          <BokBtn1
            sigwidth="30px"
            sigheight="30px"
            sigfontsize="14px"
            sigborderradius={25}
            sigmargin="30px auto"
            onClick={onClose}
          >
            닫기
          </BokBtn1>
          <img src={kakaologin} onClick={handleLogin} style={{ cursor: 'pointer' }} />
        </Box>
      </Modal>
    </>
  )
}

export default LoginModal
