import React, { useEffect, useState } from 'react'
import '../../assets/styles/Myprofile/MyProfile.css'
import AddInfoNoti2 from '../../components/Common/AddInfoNoti2'
import styled from 'styled-components'
import axios from 'axios'
import { RecentlyJobContainer } from '../Main'
import Card from '../../components/Common/Card'
import TenCardContainer from '../../components/Common/TenCardContainer'
import { Link } from 'react-router-dom'
import { DbUserId, LoginState } from '../../atom'
import { useRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
import JobListItem from '../../components/Common/JobListItem'
import '../../assets/styles/Job/JobListItem.css'
export const JobMainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`
const JobSearchContentContainer = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: 400;
  color: #666666;
`
const MyProfile = () => {
  const [dbUserId, setDbUserId] = useRecoilState(DbUserId)
  const [kakaoEmail, setkakaoEmail] = useState<string>('')
  const [kakaoId, setkakaoId] = useState<number>(0)
  const [kakaoNickname, setkakaoNickname] = useState<string>('')
  const [kakaoProfileImg, setkakaoProfileImg] = useState<string>('')
  const userName = window.localStorage.getItem('token')
    ? window.localStorage.getItem('nickname') || 'unknown'
    : undefined
  const [isLoggedIn] = useRecoilState(LoginState)
  const [getfavorite, setgetfavorite] = useState()
  const [getUserLikeyAlgo, setGetUserLikeyAlgo] = useState()
  const profileUserLikeArray: string[] = []
  //////

  ////
  const GetUserLikeyAlgo = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/algorithm/likely?userId=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data, isLoading } = useQuery(['GetUserLikey'], GetUserLikeyAlgo, {
    onSuccess: (data) => {
      setGetUserLikeyAlgo(data)
    },
    onError: (error) => {
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
  const { data: getfavoritepost } = useQuery(['GetFavorite', isLoggedIn.userId], GetFavorite, {
    onSuccess: (data) => {
      setgetfavorite(data.favorite)
    },
    onError: (error) => {
      // console.log('error:', error)
    },
  })
  ///
  const getUserinfo = () => {
    const token = window.localStorage.getItem('token')
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/users/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
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
  let getProfileUserLikeLoading = false
  let getProfileUserLike: any[] = []

  if (isLoggedIn.userId) {
    const GetProfileUserLike = async () => {
      const res = await axios(
        process.env.REACT_APP_SERVER_URL + `/myPage/getUsersLikeWanted?user_id=${isLoggedIn.userId}`,
        {
          method: 'GET',
        }
      )
      return res.data
    }
    const { data, isLoading } = useQuery(['GetProfileUserLike'], GetProfileUserLike, {})
    getProfileUserLikeLoading = isLoading
    getProfileUserLike = data || []
  }

  useEffect(() => {
    getUserinfo()
  }, [dbUserId])

  if (getProfileUserLikeLoading)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  const items = getUserLikeyAlgo

  return (
    <>
      <div className="Profile-Main-container">
        <div className="Profile-Info-container">
          <div className="Profile-Profile-container">
            <MyProfileImglogo src={kakaoProfileImg} alt="" />
            <div className="Profile-Title">
              안녕하세요, <span style={{ color: '#76DCB0' }}>{kakaoNickname}</span>님
            </div>
          </div>
          <div>
            {/* <StyledLink to={'/careerinfo'}>
              <BokBtn1 sigwidth="300px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="20px">
                개인이력수정
              </BokBtn1>
            </StyledLink> */}
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
                <div className="Profile-Like-container">
                  <TenCardContainer
                    items={items || []}
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

      <RecentlyJobContainer>
        <div className="Profile-Main-container Profile-Like-container">
          <div style={{ marginBottom: '50px' }}>
            <span style={{ fontSize: '30px', fontWeight: '700', color: '#76dcb0' }}>{userName}</span>
            <span style={{ marginBottom: '20px', fontSize: '20px', fontWeight: '700', color: '#666666' }}>
              님이 북마크한 일자리
            </span>
          </div>
        </div>
        {/* <RecentlyJobButton></RecentlyJobButton> */}
        <div>
          <div style={{ backgroundColor: '#e7f4ef', height: '50px', paddingTop: '25px', marginBottom: '50px' }}>
            <div className=" Profile-Like-container">
              <div className="BigCategoryName">
                <JobMainCategoryContainer>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>기업명</div>
                  <div style={{ flex: '4 1 0', textAlign: 'center' }}>채용공고명/지원자격</div>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>급여/근무일수</div>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>등록일/마감일</div>
                </JobMainCategoryContainer>
              </div>
            </div>
            <div className=" Profile-Like-container">
              <div className="SmallCategoryName">
                <JobMainCategoryContainer>
                  {/* <div style={{ flex: '2 1 0', textAlign: 'center' }}>기업명</div> */}
                  <div style={{ flex: '7 1 0', textAlign: 'center' }}>채용공고명/지원자격</div>
                  {/* <div style={{ flex: '2 1 0', textAlign: 'center' }}>급여/근무일수</div> */}
                  <div style={{ flex: '3 1 0', textAlign: 'center' }}>등록일/마감일</div>
                </JobMainCategoryContainer>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" Profile-Like-container">
            {getProfileUserLike.length >= 1 ? (
              <>
                {getProfileUserLike.map((item: any) => (
                  <JobListItem
                    key={item.wantedCode}
                    company={item.company}
                    title={item.title}
                    salTpNm={item.salTpNm}
                    region={item.work_region}
                    holidayTpNm={item.holidayTpNm}
                    minEdubg={item.minEdubg}
                    career={item.career}
                    regDt={item.regDate}
                    closeDt={item.closeDate}
                    wantedAuthNo={item.wantedCode}
                    degreeCode={item.degreeCode}
                    workingDay={item.workingDay}
                    salary={item.salary}
                    salaryType={item.salaryType}
                  />
                ))}
              </>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0 50px 0' }}>
                <JobSearchContentContainer>북마크가 없습니다.</JobSearchContentContainer>
              </div>
            )}
          </div>
        </div>
      </RecentlyJobContainer>
    </>
  )
}

export default MyProfile

const MyProfileImglogo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 970px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 820px) {
    width: 120px;
    height: 120px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
