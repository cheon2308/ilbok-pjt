import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import '../../assets/styles/Job/JobDetailItem.css'
import square from '../../assets/image/Square.png'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import ApplyModal from './ApplyModal'
import BokBtn1 from '../Common/BokBtn1'
import Marker from '../../assets/image/Marker.png'
import { useQuery } from '@tanstack/react-query'
import { getOneWanted } from '../../api/JobDetailApi'
import ClipLoader from 'react-spinners/ClipLoader'
import BeatLoader from 'react-spinners/BeatLoader'

export default function JobDetailItem({ wantedCode }: any) {
  const degreeData: any = { 0: '학력무관', 4: '대졸(2~3년)', 5: '대졸(4년)', 6: '석사', 7: '박사' }
  const myTagRef = useRef<HTMLDivElement>(null)
  const [modal, setModal] = useState<boolean>(false)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  const { isLoading, data } = useQuery({
    queryKey: [wantedCode],
    queryFn: () => getOneWanted(wantedCode),
  })

  const closeModal = () => {
    setModal(false)
  }

  if (isLoading || data === undefined)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )

  const address = `${data.work_region}`

  const geocoder = new kakao.maps.services.Geocoder()
  const callback = function (result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      setX(result[0].x)
      setY(result[0].y)
    }
  }
  geocoder.addressSearch(address, callback)

  const empTypeData = `${data.empType}`
  const empTypeArray = empTypeData.split('/ ')

  const workRegionData = `${data.work_region}`
  const workRegionArray = workRegionData.split(' ')

  const workTimeData = `${data.workTime}`
  const workTimeDataArray = workTimeData.split(', 주')

  const scrollToMyTag = () => {
    if (myTagRef.current) {
      myTagRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <div className="Title-container">
        <div>
          <div className="title">{data.title}</div>
          <span> 등록일 : {data.regDate} /</span> <span>마감일 : {data.closeDate}</span>
        </div>
        <div className="Detail-Button-container">
          <BokBtn1
            sigwidth="150px"
            sigheight="50px"
            sigfontsize="20px"
            sigborderradius={25}
            sigmargin="30px auto"
            onClick={() => setModal(true)}
          >
            지원방법
          </BokBtn1>
        </div>
      </div>
      <hr />
      <div className="Info-container">
        <div className="Info-item">
          <div>
            <div className="Mid-category">지원자격</div>
            <div className="Line-container">
              <div>경력</div>
              <span>{data.career}</span>
            </div>
            <div className="Line-container">
              <div>학력</div>
              <span>{degreeData[data.degreeCode]}</span>
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
              <span>{data.salaryType}</span>
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
              <span>{data.etc_welfare}</span>
            </div>
          </div>
        </div>

        <div className="Info-item" id="Detail-Job-Info">
          <div className="Mid-category">기업정보</div>
          <div className="Line-container">
            <div>기업명</div>
            <span>{data.company}</span>
          </div>
          <div className="Line-container">
            <div>업종</div>
            <span>{data.corpBusiness}</span>
          </div>
          <div className="Line-container">
            <div>대표자</div>
            <span>{data.reperName}</span>
          </div>
          <div className="Line-container">
            <div>기업규모</div>
            <span>{data.corpSize}</span>
          </div>
          <div className="Line-container">
            <div>사업내용</div>
            <span>{data.corpBusinessCont}</span>
          </div>
          <div className="Line-container">
            <div>연매출액</div>
            <span>{data.yearSales}</span>
          </div>
          <div className="Line-container">
            <div>홈페이지</div>
            <span onClick={() => window.open(data.wantedInfoUrl)}>{data.company}</span>
          </div>
          <div className="Line-container">
            <div>근로자수</div>
            <span>{data.totalEmp}</span>
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
          <span>{data.jobName}</span>
        </div>
        <div className="Job-content">
          <div className="Mid-category">직무내용</div>
          <span>{data.jobCont}</span>
        </div>

        <div>
          <div className="Category-container">
            <div className="Category-flexgrow-1" id="Category-border">
              <div className="Category-title">경력조건</div>
              <div>{data.career}</div>
            </div>

            <div className="Category-flexgrow-1">
              <div className="Category-title">학력</div>
              <div>{degreeData[data.degreeCode]}</div>
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
              <div>{data.applyNum}</div>
            </div>
            {/* <div className="Category-flexgrow">d
              <div className="Category-title">장애인채용</div>
              <div>{data.corpBusiness}</div>
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
            <div>{data.salaryType}</div>
          </div>
          <div className="Category-flexgrow-1">
            <div className="Category-title">사회보험</div>
            <div>{data.insurance}</div>
          </div>
          <div className="Category-flexgrow-1">
            <div className="Category-title">퇴직급여</div>
            <div>{data.retirepay}</div>
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
            <div>{data.major}</div>
          </div>
          <div className="Category-flexgrow-1">
            <div className="Category-title">자격면허</div>
            <div>{data.certificate}</div>
          </div>
          <div className="Category-flexgrow-1">
            <div className="Category-title">외국어 자격</div>
            <div>{data.languageCert}</div>
          </div>
        </div>

        <div className="Category-container-1" id="condition">
          <div className="Category-flexgrow-1" id="Category-border-none">
            <div className="Category-title">(기타) 우대사항</div>
            <div style={{ lineHeight: '35px' }}>{data.prefer}</div>
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
          <div>{data.etc_welfare}</div>
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
          <div>{data.disableCon}</div>
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
      {/* Modal */}
      <div>
        <ApplyModal open={modal} close={closeModal} data={data} />
      </div>
    </div>
  )
}
