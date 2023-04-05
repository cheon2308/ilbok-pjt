import React, { useEffect, useState } from 'react'
import '../../assets/styles/Myprofile/MyProfile.css'
import AddInfoNoti2 from '../../components/Common/AddInfoNoti2'
import styled from 'styled-components'
import axios from 'axios'
import BokBtn1 from '../../components/Common/BokBtn1'
import { RecentlyJobButton, RecentlyJobTitle, RecentlyJobSubtitle, RecentlyJobContainer, CardContainer } from '../Main'
import Card from '../../components/Common/Card'
import TenCardContainer from '../../components/Common/TenCardContainer'
import { Link } from 'react-router-dom'
import { DbUserId, LoginState } from '../../atom'
import { useRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'

const MyProfile = () => {
  const [dbUserId, setDbUserId] = useRecoilState(DbUserId)
  const [kakaoEmail, setkakaoEmail] = useState<string>('')
  const [kakaoId, setkakaoId] = useState<number>(0)
  const [kakaoNickname, setkakaoNickname] = useState<string>('')
  const [kakaoProfileImg, setkakaoProfileImg] = useState<string>('')
  const userName = window.localStorage.getItem('token')
    ? window.localStorage.getItem('nickname') || 'unknown'
    : undefined
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)
  const [getfavorite, setgetfavorite] = useState()
  const [getUserLikeyAlgo, setGetUserLikeyAlgo] = useState()

  ////
  const testCode = 1
  const GetUserLikeyAlgo = async () => {
    const res = await axios(`http://ilbokb.duckdns.org/algorithm/likely?userId=${testCode}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data, isLoading } = useQuery(['GetUserLikey'], GetUserLikeyAlgo, {
    onSuccess: (data) => {
      console.log(data)
      setGetUserLikeyAlgo(data)
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  ////
  // const GetFavorite = null
  const GetFavorite = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/getOne?user_id=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const {
    data: getfavoritepost,
    error,
    isError,
  } = useQuery(['GetFavorite', isLoggedIn.userId], GetFavorite, {
    onSuccess: (data) => {
      setgetfavorite(data.favorite)
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  const getUserinfo = () => {
    const token = window.localStorage.getItem('token')
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/users/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log('됐어')
        console.log(res.data.userId)
        setDbUserId(res.data.userId)
        setkakaoEmail(res.data.email)
        setkakaoId(res.data.kakaoId)
        setkakaoNickname(res.data.nickname)
        setkakaoProfileImg(res.data.profileImage)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    getUserinfo()
  }, [dbUserId])
  if (isLoading)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  const items = data
  return (
    <>
      <div className="Profile-Main-container">
        <div className="Profile-Info-container">
          <div className="Profile-Profile-container">
            <MyProfileImglogo src={kakaoProfileImg} alt="" />
            <div style={{ fontSize: '40px', marginLeft: '40px ' }}>
              안녕하세요, <span style={{ color: '#76DCB0' }}>{kakaoNickname}</span>님
            </div>
          </div>
          <div>
            <StyledLink to={'/careerinfo'}>
              <BokBtn1 sigwidth="300px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="20px">
                개인이력수정
              </BokBtn1>
            </StyledLink>
          </div>
        </div>
        <div className="Profile-Chart-container"></div>
      </div>

      <div className="Profile-Main-container">
        <div className="Profile-Extra">{!getfavorite && <AddInfoNoti2 />}</div>
        {getfavorite && (
          <div style={{ backgroundColor: '#e7f4ef', height: '500px', paddingTop: '80px' }}>
            <div>
              {userName && (
                <div style={{ margin: '0 20vw 0 20vw' }}>
                  <TenCardContainer
                    items={items}
                    name={userName}
                    title="님과 어울리는 일자리"
                    description="일복(日福)에서 추천하는 어울리는 일자리"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="Profile-Main-container Profile-Like-container">
        <RecentlyJobContainer>
          <RecentlyJobTitle>최신 일자리</RecentlyJobTitle>
          <RecentlyJobSubtitle>일복(日福)에서 최근에 게시된 일자리 </RecentlyJobSubtitle>
          <RecentlyJobButton>더보기 ▶</RecentlyJobButton>
          <CardContainer>
            {items.map((item: any, index: any) => (
              <Card
                key={index}
                company={item.company}
                title={item.title}
                salTpNm={item.salTpNm}
                region={item.work_region}
                holidayTpNm={item.holidayTpNm}
                minEdubg={item.minEdubg}
                career={item.career}
                regDt={item.regDate}
                closeDt={item.closeDate}
                wantedCode={item.wantedCode}
              />
            ))}
          </CardContainer>
        </RecentlyJobContainer>
      </div>
    </>
  )
}

export default MyProfile

const MyProfileImglogo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
