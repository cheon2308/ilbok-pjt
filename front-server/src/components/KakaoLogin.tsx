import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { KakaoUsertype } from '../types/KakaoUsertype'

function KakaoLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]
  const getKakaoToken = async () => {
    const res = await axios(`http://localhost:8080/users/oauth?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
    console.log(res.headers.authorization)
    const token = res.headers.authorization
    window.localStorage.setItem('token', token)

    const userData = await axios.get(process.env.REACT_APP_SERVER_URL + '/users/me', {
      headers: {
        Authorization: token,
      },
    })
    console.log(userData, '여기')
    return userData.data
  }

  const { data, error, isError, isLoading } = useQuery<KakaoUsertype, Error>(['kakaoLogin'], getKakaoToken, {
    retry: false,
    onSuccess: (data) => {
      const { email, kakaoId, nickname, profileImage } = data
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('kakaoId', kakaoId)
      window.localStorage.setItem('nickname', nickname)
      window.localStorage.setItem('profileImage', profileImage)
      navigate('/')
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {(error as Error).message}</div>

  return <div>여기는 로그인</div>
}

export default KakaoLogin
