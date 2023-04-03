import React from 'react'
import styled from 'styled-components'
import BokBtn1 from './BokBtn1'
import AddInfo from '../../assets/image/AddInfo.png'
import { Link } from 'react-router-dom'

const AddInfoNotiContainer = styled.div`
  height: 400px;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const AddInfoNotiImgContainer = styled.div`
  width: 50%;
  display: felx;
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
`
const AddInfoImg = styled.img`
  width: 350px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: #666666;

  :hover {
    color: #76dcb0;
  }
`

const AddInfoNoti2 = () => {
  return (
    <AddInfoNotiContainer>
      <AddInfoNotiTitleContainer>
        <AddInfoNotiTitleContentContainer>
          <AddInfoNotiTitle>
            <AddInfoNotiTitleColor>추가 정보</AddInfoNotiTitleColor>를 입력하면,
          </AddInfoNotiTitle>
          <AddInfoNotiTitle>
            <AddInfoNotiTitleColor>추천 서비스</AddInfoNotiTitleColor>를 이용할 수 있습니다.
          </AddInfoNotiTitle>
        </AddInfoNotiTitleContentContainer>
        <StyledLink to={`/careerinfo`}>
          <BokBtn1 sigwidth="350px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="0px">
            추가 정보 입력
          </BokBtn1>
        </StyledLink>
      </AddInfoNotiTitleContainer>

      <AddInfoNotiImgContainer>
        <AddInfoImg src={AddInfo} alt="mainImg" />
      </AddInfoNotiImgContainer>
    </AddInfoNotiContainer>
  )
}

export default AddInfoNoti2
