import React from 'react'
import styled from 'styled-components'
import BokBtn1 from '../../components/Common/BokBtn1'
import BokBtn2 from '../../components/Common/BokBtn2'
import SearchBar from '../../components/Common/SearchBar'
const CareerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
`

const CareerInfoTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
  margin-bottom: 20px;
`
const CareerInfoContent = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  font-weight: 400;
  color: #666666;
`
const CareerInfoLineContainer = styled.div``
const JobSearchBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
const CareerInfoCategory = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
`

function CareerInfo() {
  return (
    <div className="Main-container">
      <CareerInfoContainer>
        <CareerInfoTitle>개인 이력 수정</CareerInfoTitle>
        <CareerInfoContent></CareerInfoContent>

        <CareerInfoLineContainer>
          <CareerInfoCategory>나이</CareerInfoCategory>
          <SearchBar
            width="250px"
            height="20px"
            placeholder=""
            borderwidth="1px"
            bordercolor="#666666"
            fontsize="15px"
            hovercolor="#666666"
          />
        </CareerInfoLineContainer>

        <CareerInfoLineContainer>
          <CareerInfoCategory>지역</CareerInfoCategory>
          <SearchBar
            width="250px"
            height="20px"
            placeholder=""
            borderwidth="1px"
            bordercolor="#666666"
            fontsize="15px"
            hovercolor="#666666"
          />
        </CareerInfoLineContainer>

        <CareerInfoLineContainer>
          <CareerInfoCategory>경력</CareerInfoCategory>
          <SearchBar
            width="250px"
            height="20px"
            placeholder=""
            borderwidth="1px"
            bordercolor="#666666"
            fontsize="15px"
            hovercolor="#666666"
          />
        </CareerInfoLineContainer>

        <CareerInfoLineContainer>
          <CareerInfoCategory>직종</CareerInfoCategory>
          <SearchBar
            width="250px"
            height="20px"
            placeholder=""
            borderwidth="1px"
            bordercolor="#666666"
            fontsize="15px"
            hovercolor="#666666"
          />
        </CareerInfoLineContainer>
        <CareerInfoLineContainer>
          <CareerInfoCategory>학력</CareerInfoCategory>
          <SearchBar
            width="250px"
            height="20px"
            placeholder=""
            borderwidth="1px"
            bordercolor="#666666"
            fontsize="15px"
            hovercolor="#666666"
          />
        </CareerInfoLineContainer>

        <JobSearchBtnContainer>
          <BokBtn1 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
            완료
          </BokBtn1>
          <BokBtn2 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
            취소
          </BokBtn2>
        </JobSearchBtnContainer>
      </CareerInfoContainer>
    </div>
  )
}

export default CareerInfo
