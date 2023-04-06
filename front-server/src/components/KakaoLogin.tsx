import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { KakaoUsertype } from '../types/KakaoUsertype'
import { useRecoilState } from 'recoil'
import { LoginState } from '../atom'
import BeatLoader from 'react-spinners/BeatLoader'

function KakaoLogin() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]
  const getKakaoToken = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/oauth?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
    const token = res.headers.authorization
    window.localStorage.setItem('token', token)

    const userData = await axios.get(process.env.REACT_APP_SERVER_URL + '/users/me', {
      headers: {
        Authorization: token,
      },
    })
    return userData.data
  }

  const { data, error, isError, isLoading } = useQuery<KakaoUsertype, Error>(['kakaoLogin'], getKakaoToken, {
    retry: false,
    onSuccess: (data) => {
      const { userId, email, kakaoId, nickname, profileImage } = data
      setIsLoggedIn((prevState) => ({
        ...prevState,
        isLoggedIn: true,
        userId: userId,
      }))
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('kakaoId', kakaoId)
      window.localStorage.setItem('nickname', nickname)
      window.localStorage.setItem('profileImage', profileImage)
      navigate('/myprofile')
    },
  })

  if (isLoading)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  if (isError) return <div>Error: {(error as Error).message}</div>

  return (
    <div>
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    </div>
  )
}

export default KakaoLogin
