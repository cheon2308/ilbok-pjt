import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import '../../assets/styles/Job/JobDetailItem.css'
import square from '../../assets/image/Square.png'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import ApplyModal from './ApplyModal'
import BokBtn1 from '../Common/BokBtn1'
import Marker from '../../assets/image/Marker.png'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getOneWanted } from '../../api/JobDetailApi'
import BeatLoader from 'react-spinners/BeatLoader'
import { BsStar, BsStarFill } from 'react-icons/bs'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { LoginState } from '../../atom'
import TenCardContainer from '../Common/TenCardContainer'

export default function JobDetailItem({ wantedCode }: any) {
  useEffect(() => {
    handleIsLike()
    handleClickLog()
    window.scrollTo(0, 0)
  }, [wantedCode])
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState)

  // const [dbUserId, setDbUserId] = useRecoilState(DbUserId)
  const [dbUserId] = useRecoilState(LoginState)
  // *** Post 요청

  // 좋아요
  const handleLikePost = async (data: Record<string, any>) => {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + `/wanted/clickLike`, data)
    return res.data
  }
  // 좋아요 여부
  const handleIsLikePost = async (data: Record<string, any>) => {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + `/wanted/isLiked`, data)
    return res.data
  }
  // 클릭로그
  const handleClickLogPost = async (data: Record<string, any>) => {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + `/wanted/clicked`, data)
    return res.data
  }
  // 지원하기
  const handleClickApplyPost = async (data: Record<string, any>) => {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + `/wanted/clickApply`, data)
    return res.data
  }
  // 비슷한 공고
  const GetSimilarJobsAlgo = async () => {
    const res = await axios(process.env.REACT_APP_SERVER_URL + `/algorithm/similarJobs?wantedCode=${wantedCode}`, {
      method: 'POST',
    })
    return res.data
  }
  // ***

  const degreeData: any = { 0: '학력무관', 4: '대졸(2~3년)', 5: '대졸(4년)', 6: '석사', 7: '박사' }
  const myTagRef = useRef<HTMLDivElement>(null)
  const [modal, setModal] = useState<boolean>(false)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  const [liked, setLiked] = useState<boolean>()

  const { data: getOneWantedData } = useQuery({
    queryKey: [wantedCode],
    queryFn: () => getOneWanted(wantedCode),
  })

  const closeModal = () => {
    setModal(false)
  }

  // ****
  const {
    mutate: likePost,
    error,
    isError,
  } = useMutation(['handleLikePost'], handleLikePost, {
    onSuccess: (data) => {
      setLiked(data)
    },
    onError: (error) => {
      // 에러 발생 후 실행할 작업
    },
  })
  const { mutate: isLikePost } = useMutation(['handleIsLikePost'], handleIsLikePost, {
    onSuccess: (data) => {
      setLiked(data)
    },
    onError: (error) => {
      // 에러 발생 후 실행할 작업
    },
  })

  const { mutate: clickApplyPost } = useMutation(['handleClickApply'], handleClickApplyPost, {})

  const { mutate: clickLogPost } = useMutation(['handleClickLogPost'], handleClickLogPost, {})

  const { data, isLoading } = useQuery(['GetSimilarJobsAlgo'], GetSimilarJobsAlgo, {})
  // ****

  // **
  const handleLike = () => {
    likePost({
      userId: dbUserId.userId,
      wantedCode: wantedCode,
    })
  }
  const handleIsLike = () => {
    isLikePost({
      userId: dbUserId.userId,
      wantedCode: wantedCode,
    })
  }
  const handleClickApply = () => {
    clickApplyPost({
      userId: dbUserId.userId,
      wantedCode: wantedCode,
    })
  }
  const handleClickLog = () => {
    clickLogPost({
      userId: dbUserId.userId,
      wantedCode: wantedCode,
    })
  }

  // **
  if (isLoading || getOneWantedData === undefined)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )
  //

  //
  const address = `${getOneWantedData.work_region}`

  const geocoder = new kakao.maps.services.Geocoder()
  const callback = function (result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      setX(result[0].x)
      setY(result[0].y)
    }
  }
  geocoder.addressSearch(address, callback)

  const empTypeData = `${getOneWantedData.empType}`
  const empTypeArray = empTypeData.split('/ ')

  const workRegionData = `${getOneWantedData.work_region}`
  const workRegionArray = workRegionData.split(' ')

  const workTimeData = `${getOneWantedData.workTime}`
  const workTimeDataArray = workTimeData.split(', 주')

  const scrollToMyTag = () => {
    if (myTagRef.current) {
      myTagRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  // //
  //
  //
  //
  return (
    <>
      <div>
        <div className="Title-container">
          <div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'right' }}></div>
            <div className="title">{getOneWantedData.title}</div>
            <span> 등록일 : {getOneWantedData.regDate} /</span> <span>마감일 : {getOneWantedData.closeDate}</span>
          </div>

          <div className="Detail-Button-container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ marginRight: '30px' }} onClick={handleLike}>
                {liked === true ? (
                  <BsStarFill size={40} color="#76DCB0" strokeWidth="0.01"></BsStarFill>
                ) : (
                  <BsStar size={40} color="#76DCB0" strokeWidth="0.01"></BsStar>
                )}
              </div>
              <BokBtn1
                sigwidth="150px"
                sigheight="50px"
                sigfontsize="20px"
                sigborderradius={25}
                sigmargin="30px auto"
                onClick={() => {
                  handleClickApply()
                  setModal(true)
                }}
              >
                지원방법
              </BokBtn1>
            </div>
          </div>
        </div>
        <hr />
        <div className="Info-container">
          <div className="Info-item">
            <div>
              <div className="Mid-category">지원자격</div>
              <div className="Line-container">
                <div>경력</div>
                <span>{getOneWantedData.career}</span>
              </div>
              <div className="Line-container">
                <div>학력</div>
                <span>{degreeData[getOneWantedData.degreeCode]}</span>
              </div>
            </div>

            <div>
              <div className="Mid-category">근무조건</div>
              <div className="Line-container">
                <div>지역</div>
                <span>{workRegionArray[2] + ' ' + workRegionArray[3]}</span>
              </div>
              <div className="Line-container">
                <div>임금</div>
                <span>{getOneWantedData.salaryType}</span>
              </div>
            </div>

            <div>
              <div className="Mid-category">고용형태</div>
              <div className="Line-container">
                <div>고용형태</div>
                <span>{empTypeArray[0]}</span>
              </div>
              <div className="Line-container">
                <div>근무형태</div>
                <span>
                  {'주'} {workTimeDataArray[1]}
                </span>
              </div>
            </div>

            <div>
              <div className="Mid-category">복리후생</div>
              <div className="Line-container">
                <div>복리후생</div>
                <span>{getOneWantedData.etc_welfare}</span>
              </div>
            </div>
          </div>

          <div className="Info-item" id="Detail-Job-Info">
            <div className="Mid-category">기업정보</div>
            <div className="Line-container">
              <div>기업명</div>
              <span>{getOneWantedData.company}</span>
            </div>
            <div className="Line-container">
              <div>업종</div>
              <span>{getOneWantedData.corpBusiness}</span>
            </div>
            <div className="Line-container">
              <div>대표자</div>
              <span>{getOneWantedData.reperName}</span>
            </div>
            <div className="Line-container">
              <div>기업규모</div>
              <span>{getOneWantedData.corpSize}</span>
            </div>
            <div className="Line-container">
              <div>사업내용</div>
              <span>{getOneWantedData.corpBusinessCont}</span>
            </div>
            <div className="Line-container">
              <div>연매출액</div>
              <span>{getOneWantedData.yearSales}</span>
            </div>
            <div className="Line-container">
              <div>홈페이지</div>
              <span onClick={() => window.open(getOneWantedData.wantedInfoUrl)}>{getOneWantedData.company}</span>
            </div>
            <div className="Line-container">
              <div>근로자수</div>
              <span>{getOneWantedData.totalEmp}</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category">모집요강</div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>
          <div className="Job-content">
            <div className="Mid-category">모집직종</div>
            <span>{getOneWantedData.jobName}</span>
          </div>
          <div className="Job-content">
            <div className="Mid-category">직무내용</div>
            <span>{getOneWantedData.jobCont}</span>
          </div>

          <div>
            <div className="Category-container">
              <div className="Category-flexgrow-1" id="Category-border">
                <div className="Category-title">경력조건</div>
                <div>{getOneWantedData.career}</div>
              </div>

              <div className="Category-flexgrow-1">
                <div className="Category-title">학력</div>
                <div>{degreeData[getOneWantedData.degreeCode]}</div>
              </div>

              <div className="Category-flexgrow-1">
                <div className="Category-title">고용형태</div>
                <div>
                  {empTypeArray.map((item, index) => (
                    <div style={{ marginBottom: '20px' }} key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="Category-flexgrow-1">
                <div className="Category-title">모집인원</div>
                <div>{getOneWantedData.applyNum}</div>
              </div>
              {/* <div className="Category-flexgrow">d
              <div className="Category-title">장애인채용</div>
              <div>{getOneWantedData.corpBusiness}</div>
            </div> */}
              <div className="Category-flexgrow-1" style={{ flexGrow: 1 }}>
                <div className="Category-title">근무예정지</div>
                <div>
                  <div style={{ marginBottom: '20px' }}>{workRegionArray[2] + ' ' + workRegionArray[3]}</div>
                  <div style={{ color: '#76DCB0', fontWeight: '700' }} onClick={scrollToMyTag}>
                    지도보기 ▶
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='Category-container'>
             <div className='Category-flexgrow-2'> 
              <div className='Category-title'>모집직종</div>
              <div>데이터</div>
            </div>
            <div className='Category-flexgrow-6'>
              <div className='Category-title'>직종키워드</div>
              <div>데이터</div>
            </div>
            <div className='Category-flexgrow-2'>
              <div className='Category-title'>관련직종</div>
              <div>데이터</div>
            </div>
            </div> */}
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category">근무조건</div>

          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>

          <div className="Category-container-1" id="condition">
            <div className="Category-flexgrow-1" id="Category-border">
              <div className="Category-title">근무시간 / 근무형태</div>
              <div style={{ lineHeight: '35px' }}>{workTimeDataArray[0]}</div>
              <div>{'주 ' + workTimeDataArray[1]}</div>
              <hr />
            </div>
          </div>

          <div className="Category-container-1" id="condition">
            <div className="Category-flexgrow-1" id="Category-border">
              <div className="Category-title">임금조건</div>
              <div>{getOneWantedData.salaryType}</div>
            </div>
            <div className="Category-flexgrow-1">
              <div className="Category-title">사회보험</div>
              <div>{getOneWantedData.insurance}</div>
            </div>
            <div className="Category-flexgrow-1">
              <div className="Category-title">퇴직급여</div>
              <div>{getOneWantedData.retirepay}</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category">우대사항</div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>
          <div className="Category-container-1" id="condition">
            <div className="Category-flexgrow-1" id="Category-border">
              <div className="Category-title">전공</div>
              <div>{getOneWantedData.major}</div>
            </div>
            <div className="Category-flexgrow-1">
              <div className="Category-title">자격면허</div>
              <div>{getOneWantedData.certificate}</div>
            </div>
            <div className="Category-flexgrow-1">
              <div className="Category-title">외국어 자격</div>
              <div>{getOneWantedData.languageCert}</div>
            </div>
          </div>

          <div className="Category-container-1" id="condition">
            <div className="Category-flexgrow-1" id="Category-border-none">
              <div className="Category-title">(기타) 우대사항</div>
              <div style={{ lineHeight: '35px' }}>{getOneWantedData.prefer}</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category">복리후생</div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>
          <div className="Job-content">
            <div className="Mid-category">복리후생</div>
            <div>{getOneWantedData.etc_welfare}</div>
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category">기타사항</div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>
          <div className="Job-content">
            <div className="Mid-category">장애인 편의 시설</div>
            <div>{getOneWantedData.disableCon}</div>
          </div>
        </div>
        {/*  */}
        <div className="Detail-container">
          <div className="Big-category" ref={myTagRef}>
            위치정보
          </div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>
          <div className="Map-container">
            <Map center={{ lat: y, lng: x }} style={{ width: '100%', height: '500px' }}>
              <MapMarker
                position={{ lat: y, lng: x }}
                image={{
                  src: `${Marker}`, // 마커이미지의 주소입니다
                  size: {
                    width: 65,
                    height: 70,
                  }, // 마커이미지의 크기입니다
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
              ></MapMarker>
            </Map>
          </div>
        </div>
        <div style={{ margin: '80px 0 120px 0' }}>
          <div className="Big-category" ref={myTagRef}>
            유사공고
          </div>
          <div>
            <img className="square" src={square} alt="" />
            <hr />
          </div>

          <TenCardContainer items={data} name="" title="현재 공고와 비슷한 일자리" description="" />
        </div>
        {/* Modal */}
        <div>
          <ApplyModal open={modal} close={closeModal} data={getOneWantedData} />
        </div>{' '}
      </div>
    </>
  )
}
