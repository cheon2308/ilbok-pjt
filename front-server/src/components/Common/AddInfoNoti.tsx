import React from 'react'
import styled from 'styled-components'
import BokBtn2 from './BokBtn2'
import AddInfo from '../../assets/image/AddInfo.png'
import { useState } from 'react'
import LoginModal from '../LoginModal'
const AddInfoNotiContainer = styled.div`
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
  }
`

const AddInfoNotiTitleContainer = styled.div`
  // background-color: yellow;
  width: 50%;
  display: flex;
  flex-direction: column;
`
const AddInfoNotiTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`
const AddInfoNotiImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`

const AddInfoNotiTitleContentContainer = styled.div`
  width: 350px;
  margin-bottom: 20px;
`

const AddInfoNotiTitleColor = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
  @media (max-width: 1200px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`
const AddInfoImg = styled.img`
  width: 350px;

  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1100px) {
    width: 250px;
  }
  @media (max-width: 700px) {
    width: 200px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`
const ButtonContainer = styled.div`
  width: 350px;
  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 250px;
  }
`

const AddInfoNoti = () => {
  const [open, setOpen] = useState(false) // 로그인
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <AddInfoNotiContainer>
      <AddInfoNotiTitleContainer>
        <AddInfoNotiTitleContentContainer>
          <AddInfoNotiTitle>
            <AddInfoNotiTitleColor>로그인</AddInfoNotiTitleColor> 후,
            <AddInfoNotiTitleColor>추가 정보</AddInfoNotiTitleColor>를 입력하면,
          </AddInfoNotiTitle>
          <AddInfoNotiTitle>
            <AddInfoNotiTitleColor>추천 서비스</AddInfoNotiTitleColor>를 이용할 수 있습니다.
          </AddInfoNotiTitle>
        </AddInfoNotiTitleContentContainer>
        <ButtonContainer>
          <BokBtn2
            sigwidth="100%"
            sigheight="50px"
            sigfontsize="20px"
            sigborderradius={25}
            sigmargin="0px"
            onClick={handleOpen}
          >
            로그인
          </BokBtn2>
        </ButtonContainer>
      </AddInfoNotiTitleContainer>
      <AddInfoNotiImgContainer>
        <AddInfoImg src={AddInfo} alt="mainImg" />
      </AddInfoNotiImgContainer>
      <LoginModal open={open} onClose={handleClose}></LoginModal>
    </AddInfoNotiContainer>
  )
}

export default AddInfoNoti
