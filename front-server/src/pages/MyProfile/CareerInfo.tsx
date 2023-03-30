import React, { useState } from 'react'
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
  margin-top: 40px;
`
const CareerInfoCategory = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
`

function CareerInfo() {
  const [inputAge, setInputAge] = useState<number>()
  const [inputCities, setInputCities] = useState('')
  const [inputCareer, setInputCareer] = useState('')
  const [inputFavorite, setInputFavorite] = useState('')
  const [inputDegrees, setInputDegrees] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputAge(parseInt(e.target.value))
  }

  const handlesignalRegist = () => {
    const formData = new FormData()

    formData.append('age', String(inputAge))
    // console.log(formData)
    // console.log(JSON.stringify(formData))
    for (const key of formData.keys()) {
      console.log(key, ':', formData.get(key))
    }
    // api
    //   .post(process.env.REACT_APP_API_URL + '/signalweek', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res, '성공')
    //     setAlertOpen(true)
    //   })
    //   .catch((res) => {
    //     console.log(res, '실패 ')
    //     console.log(formData)
    //   })
    // console.log(FormData)
  }

  return (
    <div className="Main-container">
      <div style={{ margin: '25px 0 25px 0' }}>
        <CareerInfoContainer>
          <CareerInfoTitle>추가 정보 입력</CareerInfoTitle>
          <CareerInfoContent>일복(日福)을 통해 맞춤 복지를 추천 받으세요.</CareerInfoContent>
          <div style={{ margin: '20px 0 15px 0' }}>
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
                onChange={handleInput}
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
              <CareerInfoCategory>선호하는 직종</CareerInfoCategory>
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
          </div>
          <JobSearchBtnContainer>
            <BokBtn1
              sigwidth="150px"
              sigheight="50px"
              sigfontsize="20px"
              sigborderradius={25}
              sigmargin="10px"
              onClick={handlesignalRegist}
            >
              완료
            </BokBtn1>
            <BokBtn2 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
              취소
            </BokBtn2>
          </JobSearchBtnContainer>
        </CareerInfoContainer>
      </div>
    </div>
  )
}

export default CareerInfo
