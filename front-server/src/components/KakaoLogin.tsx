import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'
function KakaoLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]

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
    axios(`http://localhost:8080/api/oauth?code=${KAKAO_CODE}`, {
      method: 'GET',
    })
      .then((res) => {
        // console.log(res)
        const token = res.headers.authorization
        window.localStorage.setItem('token', token)

        navigate('/')
      })
      .then(() => {
        const token = window.localStorage.getItem('token')

        try {
          axios
            .get('http://localhost:8080/api/me', {
              headers: {
                Authorization: token,
              },
            })
            .then((res) => {
              console.log(res)
              const kakaoEmail = res.data.kakaoEmail
              const kakaoId = res.data.kakaoId
              const kakaoNickname = res.data.kakaoNickname
              const kakaoProfileImg = res.data.kakaoProfileImg

              window.localStorage.setItem('kakaoEmail', kakaoEmail)
              window.localStorage.setItem('kakaoId', kakaoId)
              window.localStorage.setItem('kakaoNickname', kakaoNickname)
              window.localStorage.setItem('kakaoProfileImg', kakaoProfileImg)
            })
        } catch (e) {
          console.error(e)
        }
      })
  }

  useEffect(() => {
    getKAkaoToken()
  }, [])
  return <div>여기는 로ㅓ그인 헤ㅔㄷㄹ ㅐㅔㄷ걸 ㅐㅔ더ㅑㅐㅔ </div>
}

export default KakaoLogin
