import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { KakaoUsertype } from '../types/KakaoUsertype'
import { useRecoilState } from 'recoil'
import { LoginState } from '../atom'

function KakaoLogin() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]
<<<<<<< HEAD
  const getKakaoToken = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/oauth?code=${KAKAO_CODE}`, {
=======

  const getKAkaoToken = () => {
    // const KAKAO_AUTH_URL = `http://localhost:8080/oauth2/authorization/kakao`
    console.log('시작')
    // ;async () => {
    //   try {
    //     console.log(KAKAO_CODE)
    //     const res = await axios.get(`http://localhost:8080/api/oauth?code=${KAKAO_CODE}`)
    //     const token = res.headers.authorization
    //     window.localStorage.setItem('token', token)
    //     navigate('/')
    //   } catch (e) {
    //     console.error(e)
    //     navigate('/')
    //   }
    // }
    axios(`http://jaehojjang2.duckdns.org/users/oauth?code=${KAKAO_CODE}`, {
>>>>>>> cd82c54cbb1d174a6e9e1d377cf845a38a1881ff
      method: 'GET',
    })
    const token = res.headers.authorization
    window.localStorage.setItem('token', token)

<<<<<<< HEAD
    const userData = await axios.get(process.env.REACT_APP_SERVER_URL + '/users/me', {
      headers: {
        Authorization: token,
      },
    })
    console.log(userData, '여기')
    return userData.data
=======
        try {
          axios
            .get('http://jaehojjang2.duckdns.org/users/me', {
              headers: {
                Authorization: token,
              },
            })
            .then((res) => {
              console.log(res)
              const email = res.data.email
              const kakaoId = res.data.kakaoId
              const nickname = res.data.nickname
              const profileImage = res.data.profileImage

              window.localStorage.setItem('email', email)
              window.localStorage.setItem('kakaoId', kakaoId)
              window.localStorage.setItem('nickname', nickname)
              window.localStorage.setItem('profileImage', profileImage)
            })
            .then(() => {
              navigate('/')
            })
        } catch (e) {
          console.error(e)
        }
      })
>>>>>>> cd82c54cbb1d174a6e9e1d377cf845a38a1881ff
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
      navigate('/')
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {(error as Error).message}</div>

  return <div>여기는 로그인</div>
}

export default KakaoLogin
