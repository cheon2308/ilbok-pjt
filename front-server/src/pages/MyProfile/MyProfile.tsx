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

const items = [
  {
    wantedCode: 1,
    degreeCode: {
      degreeId: 0,
      degree: '학력무관',
    },
    cityCode: 41110,
    jobCode: 562300,
    wantedNo: 'K151132303200060',
    company: '주)골든글로벌자산관리',
    title: '주차관리원 모집합니다.',
    salaryType: '월급',
    salary: '2200000',
    workingDay: '주6일근무',
    career: '관계없음',
    regDate: '23-03-20',
    closeDate: '23-04-30',
    wantedInfoUrl: 'http://www.work.go.kr/empDetailRedirect.do?wantedAuthNo=K151132303200060',
    reperName: '백효진',
    corpBusiness: '사업시설 유지ㆍ관리 서비스업',
    corpBusinessCont: '사업 시설 관리 및 사업 지원',
    corpHomepage: null,
    corpSize: '중소기업',
    totalEmp: 15,
    yearSales: 0,
    corpAddr: '16898 경기도 용인시 기흥구 보정로 117, 164호 (보정동)',
    jobName: '주차 관리·안내원(562300)',
    empType: '기간의 정함이 있는 근로계약12 개월/ 파견근로 비희망/ 대체인력채용 비희망',
    applyNum: 1,
    jobCont: null,
    languageCert: null,
    major: null,
    certificate: null,
    prefer: null,
    empProcess: '서류,면접',
    applyMethod: '방문',
    document: '이력서,자기소개서',
    work_region: '(16689)  경기도 수원시 영통구 영통로 195 (망포동)',
    workTime: '평일 : 월~금 9:30~18:00/토 9:30~14:00, 주 6일 근무, 평균근무시간 : 39',
    insurance: '국민연금 고용보험 산재보험 의료보험',
    retirepay: '퇴직연금',
    etc_welfare: null,
    disableCon: null,
  },
]

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
  // const GetFavorite = null
  const GetFavorite = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/users/getOne?user_id=${isLoggedIn.userId}`, {
      method: 'POST',
    })
    return res.data
  }
  const { data, error, isError, isLoading } = useQuery(['GetFavorite', isLoggedIn.userId], GetFavorite, {
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
                <TenCardContainer
                  items={items}
                  name={userName}
                  title="님과 어울리는 일자리"
                  description="일복(日福)에서 추천하는 어울리는 일자리"
                />
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
