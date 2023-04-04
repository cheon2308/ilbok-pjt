import { CarCrash } from '@mui/icons-material'
import React from 'react'
import AddInfoNoti from '../Common/AddInfoNoti'
import JobSearch from './JobSearch'
import { useState } from 'react'
import Card from '../../components/Common/Card'
import TenCardContainer from '../Common/TenCardContainer'
import Paging from '../Common/Paging'
import AddInfoNoti2 from '../Common/AddInfoNoti2'
import styled from 'styled-components'
import JobListContainer from '../Common/JobListContainer'
import { useRecoilState } from 'recoil'
import { LoginState } from '../../atom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
export default function JobMainItem({ keyword }: any) {
  // 메인 : 0 / 로그인 : 1 / 로그인+추가정보 : 2
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
      // console.log('data:', data)
      // 데이터 로드 후 실행할 작업
    },
    onError: (error) => {
      console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })

  // 비슷한 유저들이 관심있는 items
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

  // 어울리는 일자리 items2
  const items2 = [
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

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  if (isLoading)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  return (
    <>
      {isLoggedIn.isLoggedIn === false ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti />
          </div>
        </div>
      ) : isLoggedIn.isLoggedIn === true && getfavorite === null ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti2 />
          </div>
        </div>
      ) : getfavorite !== null ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '1000px', paddingTop: '80px' }}>
          <TenCardContainer
            items={items}
            name="김유민"
            title="님과 비슷한 유저들이 관심있는 일자리"
            description="일복(日福)에서 추천하는 비슷한 유저들이 관심있는 일자리"
          />
          {/* <div style={{ paddingTop: '80px' }}>
            <TenCardContainer
              items={items2}
              name="김유민"
              title="님과 어울리는 일자리"
              description="일복(日福)에서 추천하는 어울리는 일자리"
            />
          </div> */}
        </div>
      ) : null}

      <div className="Main-container">
        <JobSearch keyword={keyword} />
      </div>

      <div style={{ marginTop: '25px', marginBottom: '25px' }}>
        <JobListContainer />
      </div>
    </>
  )
}

const JobMainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
`
