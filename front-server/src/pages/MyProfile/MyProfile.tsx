import React, { useEffect, useState } from 'react'
import '../../assets/styles/Myprofile/MyProfile.css'
import AddInfoNoti2 from '../../components/Common/AddInfoNoti2'
import styled from 'styled-components'
import axios from 'axios'
import BokBtn1 from '../../components/Common/BokBtn1'
function MyProfile() {
  const [kakaoEmail, setkakaoEmail] = useState<string>('')
  const [kakaoId, setkakaoId] = useState<number>(0)
  const [kakaoNickname, setkakaoNickname] = useState<string>('')
  const [kakaoProfileImg, setkakaoProfileImg] = useState<string>('')
  const getUserinfo = () => {
    const token = window.localStorage.getItem('token')
    axios
      .get('http://localhost:8080/api/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res)
        setkakaoEmail(res.data.kakaoEmail)
        setkakaoId(res.data.kakaoId)
        setkakaoNickname(res.data.kakaoNickname)
        setkakaoProfileImg(res.data.kakaoProfileImg)
      })
  }
  useEffect(() => {
    getUserinfo()
  }, [])
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
            <BokBtn1 sigwidth="300px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="20px">
              개인정보수정
            </BokBtn1>
            <BokBtn1 sigwidth="300px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="20px">
              개인이력수정
            </BokBtn1>
          </div>
        </div>
        <div className="Profile-Chart-container">
          <div>차트1</div>
          <div>차트2</div>
        </div>
      </div>
      <div className="Profile-Main-container">
        <Ilbok>
          <AddInfoNoti2 />
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
const MyProfileImglogo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
