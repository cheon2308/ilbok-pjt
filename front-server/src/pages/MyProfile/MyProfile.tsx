import React from 'react'
import '../../assets/styles/Myprofile/MyProfile.css'
import AddInfoNoti from '../../components/Common/AddInfoNoti'
import styled from 'styled-components'
function MyProfile() {
  return (
    <>
      <div className="Profile-Main-container">
        <div className="Profile-Info-container">
          <div className="Profile-Profile-container">
            <div>프로필사진</div>
            <div>안녕하세요, 김현진님</div>
          </div>
          <div>
            <div>개인정보수정</div>
            <div>개인이력수정</div>
          </div>
        </div>
        <div className="Profile-Chart-container">
          <div>차트1</div>
          <div>차트2</div>
        </div>
      </div>
      <div className="Profile-Main-container">
        <Ilbok>
          <AddInfoNoti />
        </Ilbok>
        <div>김현진님과 어울리는 일자리</div>
        <div>일복에서 추천하는 어울리는 일자리</div>
        <div>캐러셀</div>
      </div>
      <div className="Profile-Main-container Profile-Like-container">
        <div>김현진님이 관심있는 일자리</div>
        <div>일복이 추천하는 일자리</div>
        <div>게시판</div>
      </div>
    </>
  )
}

export default MyProfile
const Ilbok = styled.div`
  margin: 0 20vw 0 20vw;
`
