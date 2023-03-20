import React from 'react'
import { useState, useEffect } from 'react'
import '../../assets/styles/Job/JobDetailItem.css'
import square from '../../assets/image/Square.png'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import ApplyModal from './ApplyModal'
import BokBtn1 from '../Common/BokBtn1'
import Marker from '../../assets/image/Marker.png'
export default function JobDetailItem() {
  const [modal, setModal] = useState<boolean>(false)
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  // 우편번호 확인하기
  const address = '(14316) 경기도 광명시 오리로 518, CL타워 7~10층 (서울대효요양병원 10층 영양실) (소하동)'

  const closeModal = () => {
    setModal(false)
  }

  const geocoder = new kakao.maps.services.Geocoder()
  const callback = function (result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result)
      setX(result[0].x)
      setY(result[0].y)
    }
  }
  geocoder.addressSearch(address, callback)

  return (
    <div>
      <div className="Title-container">
        <div>
          <div className="title">SSAFY 개발자 모집</div>
          <span>등록일 : 2023.03.03 /</span> <span>마감일 : 2023.03.19</span>
        </div>
        <div>
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
              <span>데이터</span>
            </div>
            <div className="Line-container">
              <div>학력</div>
              <span>데이터</span>
            </div>
          </div>

          <div>
            <div className="Mid-category">근무조건</div>
            <div className="Line-container">
              <div>지역</div>
              <span>데이터</span>
            </div>
            <div className="Line-container">
              <div>임금</div>
              <span>데이터</span>
            </div>
          </div>

          <div>
            <div className="Mid-category">고용형태</div>
            <div className="Line-container">
              <div>고용형태</div>
              <span>데이터</span>
            </div>
            <div className="Line-container">
              <div>근무형태</div>
              <span>데이터</span>
            </div>
          </div>

          <div>
            <div className="Mid-category">복리후생</div>
            <div className="Line-container">
              <div>복리후생</div>
              <span>데이터</span>
            </div>
          </div>
        </div>

        <div className="Info-item">
          <div className="Mid-category">기업정보</div>
          <div className="Line-container">
            <div>기업명</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>업종</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>대표자</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>기업규모</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>사업내용</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>연매출액</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>홈페이지</div>
            <span>데이터</span>
          </div>
          <div className="Line-container">
            <div>근로자수</div>
            <span>데이터</span>
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
          <span>데이터</span>
        </div>
        <div className="Job-content">
          <div className="Mid-category">직무내용</div>
          <span>데이터</span>
        </div>

        <div>
          <div className="Category-container">
            <div className="Category-flexgrow" id="Category-border">
              <div className="Category-title">경력조건</div>
              <div>데이터</div>
            </div>

            <div className="Category-flexgrow">
              <div className="Category-title">학력</div>
              <div>데이터</div>
            </div>

            <div className="Category-flexgrow">
              <div className="Category-title">고용형태</div>
              <div>데이터</div>
            </div>

            <div className="Category-flexgrow">
              <div className="Category-title">모집인원</div>
              <div>데이터</div>
            </div>
            <div className="Category-flexgrow">
              <div className="Category-title">장애인채용</div>
              <div>데이터</div>
            </div>
            <div className="Category-flexgrow">
              <div className="Category-title">근무예정지</div>
              <div>데이터</div>
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
        <div className="Category-container" id="condition">
          <div className="Category-flexgrow" id="Category-border">
            <div className="Category-title">임금조건</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">근무시간</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">근무형태</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">사회보험</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">퇴직급여</div>
            <div>데이터</div>
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
        <div className="Category-container" id="condition">
          <div className="Category-flexgrow" id="Category-border">
            <div className="Category-title">전공</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">자격면허</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">외국어 자격</div>
            <div>데이터</div>
          </div>
          <div className="Category-flexgrow">
            <div className="Category-title">(기타) 우대사항</div>
            <div>데이터</div>
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
          <div>데이터</div>
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
          <div>데이터</div>
        </div>
      </div>
      {/*  */}
      <div className="Detail-container">
        <div className="Big-category">위치정보</div>
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
        <ApplyModal open={modal} close={closeModal} />
      </div>
    </div>
  )
}
