import React from 'react'
import { useState, useEffect } from 'react'
import './JobDetailItem.css'

export default function JobDetailItem() {
  return (
    <div>
      <div className="Info-container">
        <div className="title">SSAFY 개발자 모집</div>
        <div>
          <button>버튼</button>
        </div>
      </div>
      <hr />
      <div className="Inner-container">
        <div className="Inner-item">
          <div>
            <div className="Mid-category">지원자격</div>
            <div className="Line-container">
              <div>경력</div>
              <div>경력데이터</div>
            </div>
            <div className="Line-container">
              <div>학력</div>
              <div>학력데이터</div>
            </div>
          </div>

          <div>
            <div className="Mid-category">근무조건</div>
            <div className="Line-container">
              <div>지역</div>
              <div>지역데이터</div>
            </div>
            <div className="Line-container">
              <div>임금</div>
              <div>임금데이터</div>
            </div>
          </div>

          <div>
            <div className="Mid-category">고용형태</div>
            <div className="Line-container">
              <div>고용형태</div>
              <div>고용형태데이터</div>
            </div>
            <div className="Line-container">
              <div>근무형태</div>
              <div>근무형태데이터</div>
            </div>
          </div>

          <div>
            <div className="Mid-category">복리후생</div>
          </div>
        </div>

        <div className="Inner-item">
          <div className="Line-container">
            <div>기업명</div>
            <div>기업명데이터</div>
          </div>
          <div className="Line-container">
            <div>업명</div>
            <div>업명데이터</div>
          </div>
          <div className="Line-container">
            <div>기업규모</div>
            <div>기업규모데이터</div>
          </div>
          <div className="Line-container">
            <div>설립년도</div>
            <div>설립년도데이터</div>
          </div>
          <div className="Line-container">
            <div>연매출액</div>
            <div>연매출액데이터</div>
          </div>
          <div className="Line-container">
            <div>홈페이지</div>
            <div>홈페이지데이터</div>
          </div>
          <div className="Line-container">
            <div>근로자수</div>
            <div>근로자수데이터</div>
          </div>
        </div>
      </div>
      <div>
        <div className="Big-category">모집요강</div>
        <hr />
        <div>직무내용</div>
        <div>직무내용데이터</div>
      </div>

      <div>
        <table>
          <tr>
            <th>경력조건</th>
            <th>학력</th>
            <th>고용형태</th>
            <th>모집인원</th>
            <th>장애인 채용인원</th>
            <th>근무 예정지</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th>모집직종</th>
            <th>직종키워드</th>
            <th>관련직종</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </table>
      </div>

      <div className="Big-category">근무조건</div>
      <hr />
      <table>
        <tr>
          <th>임금조건</th>
          <th>근무시간</th>
          <th>근무형태</th>
          <th>사회보험</th>
          <th>퇴직급여</th>
        </tr>
        <tr>
          <td>임금조건데이터</td>
          <td>근무시간데이터</td>
          <td>근무형태데이터</td>
          <td>사회보험데이터</td>
          <td>퇴직급여데이터</td>
        </tr>
      </table>

      <div className="Big-category">기타사항</div>
      <hr />
      <div>추가조건</div>

      <div className="Big-category">위치정보</div>
      <hr />
      <div>지도</div>
    </div>
  )
}
