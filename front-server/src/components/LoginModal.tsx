import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import kakaologin from '../assets/image/kakao_login_medium_narrow.png'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
const style = {
  width: '30%',
  height: '50%',
  bgcolor: 'background.paper',
  borderRadius: 20,
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
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <button onClick={onClose}>닫기</button>
          <img src={kakaologin} onClick={handleLogin} style={{ cursor: 'pointer' }} />
        </Box>
      </Modal>
    </>
  )
}

export default LoginModal
