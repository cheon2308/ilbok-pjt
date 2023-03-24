import React, { useEffect, useState } from 'react'
import '../../assets/styles/Myprofile/MyProfile.css'
import AddInfoNoti2 from '../../components/Common/AddInfoNoti2'
import styled from 'styled-components'
import axios from 'axios'
import BokBtn1 from '../../components/Common/BokBtn1'
import { RecentlyJobButton, RecentlyJobTitle, RecentlyJobSubtitle, RecentlyJobContainer, CardContainer } from '../Main'
import Card from '../../components/Common/Card'
import TenCardContainer from '../../components/Common/TenCardContainer'

const items = [
  { title: 'Item 1', description: 'This is the first item' },
  { title: 'Item 2', description: 'This is the second item' },
  { title: 'Item 3', description: 'This is the third item' },
  { title: 'Item 4', description: 'This is the fourth item' },
  { title: 'Item 5', description: 'This is the fifth item' },
  { title: 'Item 6', description: 'This is the fifth item' },
  { title: 'Item 7', description: 'This is the fifth item' },
  { title: 'Item 8', description: 'This is the fifth item' },
]
const items2 = [
  { title: 'Item 1', description: 'This is the first item' },
  { title: 'Item 2', description: 'This is the second item' },
  { title: 'Item 3', description: 'This is the third item' },
  { title: 'Item 4', description: 'This is the fourth item' },
  { title: 'Item 5', description: 'This is the fifth item' },
  { title: 'Item 6', description: 'This is the fifth item' },
  { title: 'Item 7', description: 'This is the fifth item' },
  { title: 'Item 8', description: 'This is the fifth item' },
  { title: 'Item 9', description: 'This is the fifth item' },
  { title: 'Item 10', description: 'This is the fifth item' },
]
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
        <div className="Profile-Extra">
          <AddInfoNoti2 />
        </div>
        <div style={{ backgroundColor: '#e7f4ef', height: '500px', paddingTop: '80px' }}>
          <div>
            <TenCardContainer
              items={items2}
              name="김유민"
              title="님과 어울리는 일자리"
              description="일복(日福)에서 추천하는 어울리는 일자리"
            />
          </div>
        </div>
      </div>
      <div className="Profile-Main-container Profile-Like-container">
        <RecentlyJobContainer>
          <RecentlyJobTitle>최신 일자리</RecentlyJobTitle>
          <RecentlyJobSubtitle>일복(日福)에서 최근에 게시된 일자리 </RecentlyJobSubtitle>
          <RecentlyJobButton>더보기 ▶</RecentlyJobButton>
          <CardContainer>
            {items.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
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
