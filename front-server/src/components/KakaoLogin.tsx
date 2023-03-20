import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
// import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
function KakaoLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]

  const getKAkaoToken = () => {
    // const KAKAO_AUTH_URL = `http://localhost:8080/oauth2/authorization/kakao`
    console.log('시작')
    ;async () => {
      try {
        const res = await axios.get(`http://localhost:8080/oauth?code=${KAKAO_CODE}`)
        const token = res.headers.authorization
        window.localStorage.setItem('token', token)
        navigate('/')
      } catch (e) {
        console.error(e)
        navigate('/')
      }
    }
    // fetch(
    //   `http://localhost:8080/oauth2/authorization/kakao?code=${KAKAO_CODE}&registrationId=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
    //   {
    //     // fetch(`http://localhost:8080/oauth`, {
    //     method: 'GET',
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     localStorage.setItem('token', data.token)
    //     navigate('/')
    //   })
  }

  useEffect(() => {
    getKAkaoToken()
  }, [])
  return <div>여기는 로ㅓ그인 헤ㅔㄷㄹ ㅐㅔㄷ걸 ㅐㅔ더ㅑㅐㅔ </div>
}

export default KakaoLogin
