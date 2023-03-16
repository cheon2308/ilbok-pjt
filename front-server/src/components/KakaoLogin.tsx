import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
function KakaoLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]
  const getKAkaoToken = () => {
    fetch(`http://localhost:8080/oauth?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token)
        } else {
          navigate('/')
        }
      })
  }
  useEffect(() => {
    if (!location.search) return
    getKAkaoToken()
  }, [])
  return <div>카카오로그인</div>
}

export default KakaoLogin
