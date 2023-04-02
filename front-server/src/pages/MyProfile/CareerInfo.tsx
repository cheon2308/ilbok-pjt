import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BokBtn1 from '../../components/Common/BokBtn1'
import BokBtn2 from '../../components/Common/BokBtn2'
import SearchBar from '../../components/Common/SearchBar'
import FilterSelect from '../../components/Common/FilterSelect'
import JobSearch from '../../components/Job/JobSearch'
import JobSelect from '../../components/Common/JobSelect/JobSelect'
import JobSubSelect from '../../components/Common/JobSelect/JobSubSelect'
import JobSubSelect2 from '../../components/Common/JobSelect/JobSubSelect2'
import { SlMagnifier } from 'react-icons/sl'
import RegionSelect from '../../components/Common/RegionSelect/RegionSelect'
import CitySelect from '../../components/Common/RegionSelect/CitySelect'
import CareerSelect from '../../components/Common/CareerSelect/CareerSelect'
import CareerSubSelect from '../../components/Common/CareerSelect/CareerSubSelect'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import {
  CareerSelectCode,
  CareerSelectName,
  CareerSubSelectName,
  CityName,
  JobFamilyName,
  JobName,
  JobSubName,
  RegionName,
} from '../../atom'

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
const SearchButtonContainer = styled.div`
  margin: 15px 0 15px 15px;
`

const SearchButton = styled.button`
  width: 43px;
  height: 43px;
  background-color: #76dcb0;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color:#c6f0de;
    box-shadow: 0 0 0 1px #c6f0de;

`

const SlMagnifierContainer = styled.div`
  width: 100%;
`
const SearchCategoryContainer = styled.div`
  margin: 20px 0 20px 0;
  height: 50px;
  display: flex;
  align-items: center;
`
const props = [{ name: '일자리' }, { name: '복지' }]

function CareerInfo() {
  const navigate = useNavigate()
  const onClickImg = () => {
    navigate(-1)
  }
  const [inputAge, setInputAge] = useState<number>()
  const [inputCities, setInputCities] = useState<number>()
  const [inputCareer, setInputCareer] = useState<number>() // 경력
  const [inputFavorite, setInputFavorite] = useState<number>() // 선호하는 직종
  const [inputDegrees, setInputDegrees] = useState<number>()

  const [carrerCode, setCarrerCode] = useRecoilState(CareerSelectCode)
  const [carrerName, setCarrerName] = useRecoilState(CareerSelectName)
  const [carrerSubName, setCarrerSubName] = useRecoilState(CareerSubSelectName)

  const [jobFamilyName] = useRecoilState(JobFamilyName)
  const [jobSubName] = useRecoilState(JobSubName)

  const [regionName] = useRecoilState(RegionName)
  const [cityName] = useRecoilState(CityName)

  console.log(carrerCode)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputAge(parseInt(e.target.value))
  }

  const handlesignalRegist = () => {
    const UserData = {
      age: inputAge,
    }
    // console.log(formData)
    // console.log(JSON.stringify(formData))
    // axios
    //   .post(process.env.REACT_APP_API_URL + '/signalweek', , {
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
  const [searchJobIsOpen, setSearchJobIsOpen] = useState(false)
  const [searchRegionIsOpen, setSearchRegionIsOpen] = useState(false)
  const [searchCareerIsOpen, setSearchCareerIsOpen] = useState(false)

  const degreeList = [
    { degreeCode: 0, name: '학력무관' },
    { degreeCode: 4, name: '대졸(2~3년)' },
    { degreeCode: 5, name: '대졸(4년)' },
    { degreeCode: 6, name: '석사' },
    { degreeCode: 7, name: '박사' },
  ]

  // Toggle
  const searchJobToggle = () => {
    setSearchJobIsOpen((searchJobIsOpen) => !searchJobIsOpen)
  }
  const searchRegionToggle = () => {
    setSearchRegionIsOpen((searchRegionIsOpen) => !searchRegionIsOpen)
  }
  const searchCareerToggle = () => {
    setSearchCareerIsOpen((searchCareerIsOpen) => !searchCareerIsOpen)
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
              <SearchCategoryContainer>
                <div onClick={() => searchRegionToggle()}>
                  <input
                    style={{
                      width: '250px',
                      height: '20px',
                      fontSize: '15px',
                      padding: '10px 10px 10px 15px',
                      margin: '0 15px 0 0',
                    }}
                    disabled
                    value={regionName}
                  ></input>
                  <input
                    style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={cityName}
                  ></input>
                </div>
                <SearchButtonContainer>
                  <SearchButton onClick={() => searchRegionToggle()}>
                    <SlMagnifierContainer>
                      <SlMagnifier size="20px" color="white" />
                    </SlMagnifierContainer>
                  </SearchButton>
                </SearchButtonContainer>
              </SearchCategoryContainer>
              {searchRegionIsOpen === true ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    margin: '50px 0 50px 0',
                    border: '1px solid #D9D9D9',
                    borderRadius: '5px',
                  }}
                >
                  <RegionSelect />
                  <CitySelect />
                </div>
              ) : null}
            </CareerInfoLineContainer>

            <CareerInfoLineContainer>
              <CareerInfoCategory>경력</CareerInfoCategory>
            </CareerInfoLineContainer>
            <SearchCategoryContainer>
              <div onClick={() => searchCareerToggle()}>
                <input
                  style={{
                    width: '250px',
                    height: '20px',
                    fontSize: '15px',
                    padding: '10px 10px 10px 15px',
                    margin: '0 15px 0 0',
                  }}
                  disabled
                  value={carrerName}
                ></input>
                <input
                  style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                  disabled
                  value={carrerSubName}
                ></input>
              </div>
              <SearchButtonContainer>
                <SearchButton onClick={() => searchJobToggle()}>
                  <SlMagnifierContainer>
                    <SlMagnifier size="20px" color="white" />
                  </SlMagnifierContainer>
                </SearchButton>
              </SearchButtonContainer>
            </SearchCategoryContainer>
            {searchCareerIsOpen === true ? (
              <div
                style={{
                  height: '230px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  margin: '50px 0 50px 0',
                  border: '1px solid #D9D9D9',
                  borderRadius: '5px',
                }}
              >
                <CareerSelect />
                <CareerSubSelect />
              </div>
            ) : null}

            <CareerInfoLineContainer>
              <CareerInfoCategory>선호하는 직종</CareerInfoCategory>
              <SearchCategoryContainer>
                <div onClick={() => searchJobToggle()}>
                  <input
                    style={{
                      width: '250px',
                      height: '20px',
                      fontSize: '15px',
                      padding: '10px 10px 10px 15px',
                      margin: '0 15px 0 0',
                    }}
                    disabled
                    value={jobFamilyName}
                  ></input>
                  <input
                    style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobSubName}
                  ></input>
                </div>
                <SearchButtonContainer>
                  <SearchButton onClick={() => searchJobToggle()}>
                    <SlMagnifierContainer>
                      <SlMagnifier size="20px" color="white" />
                    </SlMagnifierContainer>
                  </SearchButton>
                </SearchButtonContainer>
              </SearchCategoryContainer>
            </CareerInfoLineContainer>
            {searchJobIsOpen === true ? (
              <CareerInfoLineContainer>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    margin: '50px 0 50px 0',
                    border: '1px solid #D9D9D9',
                    borderRadius: '5px',
                  }}
                >
                  <JobSelect />
                  <JobSubSelect />
                </div>
              </CareerInfoLineContainer>
            ) : null}
            <CareerInfoLineContainer>
              <CareerInfoCategory>학력</CareerInfoCategory>

              <FilterSelect
                props={degreeList}
                width="280px"
                height="45px"
                borderwidth="1px"
                bordercolor="#666666"
                fontsize="16px"
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

            <BokBtn2
              sigwidth="150px"
              sigheight="50px"
              sigfontsize="20px"
              sigborderradius={25}
              sigmargin="10px"
              onClick={onClickImg}
            >
              취소
            </BokBtn2>
          </JobSearchBtnContainer>
        </CareerInfoContainer>
      </div>
    </div>
  )
}

export default CareerInfo
