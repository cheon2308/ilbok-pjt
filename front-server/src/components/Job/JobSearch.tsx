import React from 'react'
import styled from 'styled-components'
import BokBtn1 from '../Common/BokBtn1'
import BokBtn2 from '../Common/BokBtn2'
import RadioBtn from '../Common/RadioBtn'
import SearchBar from '../Common/SearchBar'
import { useState } from 'react'
import './JobSearch.css'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { SlMagnifier } from 'react-icons/sl'
import JobSelect from '../Common/JobSelect/JobSelect'
import JobSubSelect from '../Common/JobSelect/JobSubSelect'
import JobSubSelect2 from '../Common/JobSelect/JobSubSelect2'
import RegionSelect from '../Common/RegionSelect/RegionSelect'
import CitySelect from '../Common/RegionSelect/CitySelect'
import { useRecoilState } from 'recoil'
import { CityName, JobFamilyCode, JobFamilyName, JobName, JobSubName, RegionName } from '../../atom'

const JobSearchMainContainer = styled.div`
  margin: 100px 0 100px 0;
`
const JobSearchTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`

const JobSearchTitleContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const JobSearchSubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  color: #666666;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const JobSearchContentContainer = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: 400;
  color: #666666;
`

const JobSearchCategoryContainer = styled.div`
  margin: 20px 0 20px 0;
  height: 50px;
  display: flex;
  align-items: center;
`

const JobSearchBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const JobSearchCategoryTitleContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-weight: 700;
`

const RadioBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function JobSearch() {
  const [searchIsOpen, setSearchIsOpen] = useState(true)
  const [searchJobIsOpen, setSearchJobIsOpen] = useState(false)
  const [searchRegionIsOpen, setSearchRegionIsOpen] = useState(false)

  const [jobFamilyName] = useRecoilState(JobFamilyName)
  const [jobSubName] = useRecoilState(JobSubName)
  const [jobName] = useRecoilState(JobName)

  const [regionName] = useRecoilState(RegionName)
  const [cityName] = useRecoilState(CityName)

  // Toggle
  const searchToggle = () => {
    setSearchIsOpen((searchIsOpen) => !searchIsOpen)
  }
  const searchJobToggle = () => {
    setSearchJobIsOpen((searchJobIsOpen) => !searchJobIsOpen)
  }
  const searchRegionToggle = () => {
    setSearchRegionIsOpen((searchRegionIsOpen) => !searchRegionIsOpen)
  }

  // JobSelect

  // 학력
  const [selectedDegree, setSelectedDegree] = useState<number>(0)
  type RadioValuesDegree = {
    [key: string]: number
  }
  const radioValuesDegree: RadioValuesDegree = {
    전체: 0,
    '대졸(2~3년)': 4,
    '대졸(4년)': 5,
    석사: 6,
    박사: 7,
  }
  const handleRadioChangedegree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(radioValuesDegree[value])
    setSelectedDegree(radioValuesDegree[value])
  }
  //여기까지(학력)

  //경력
  const handleRadioChangecareer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value)
  }
  return (
    <>
      <JobSearchMainContainer>
        <JobSearchTitleContainer>
          <div style={{ flexGrow: '9' }}>
            <JobSearchTitle>일자리 검색</JobSearchTitle>
            <JobSearchSubTitle>일복은 워크넷과 연계해서 채용 정보를 제공하고 있습니다.</JobSearchSubTitle>
          </div>
          <div style={{ flexGrow: '1' }}>
            {searchIsOpen === true ? (
              <BiChevronUp size="40px" color="#76dcb0" onClick={() => searchToggle()}></BiChevronUp>
            ) : (
              <BiChevronDown size="40px" color="#76dcb0" onClick={() => searchToggle()}></BiChevronDown>
            )}
          </div>
        </JobSearchTitleContainer>

        {searchIsOpen === true ? (
          <div className="JobSearchToggle">
            <JobSearchContentContainer>
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>직종선택</JobSearchCategoryTitleContainer>
                <div onClick={() => searchJobToggle()}>
                  <input
                    style={{ width: '150px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobFamilyName}
                  ></input>
                  <input
                    style={{ width: '150px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobSubName}
                  ></input>
                  <input
                    style={{ width: '150px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobName}
                  ></input>
                </div>
                <SearchButtonContainer>
                  <SearchButton onClick={() => searchJobToggle()}>
                    <SlMagnifierContainer>
                      <SlMagnifier size="20px" color="white" />
                    </SlMagnifierContainer>
                  </SearchButton>
                </SearchButtonContainer>
              </JobSearchCategoryContainer>
              {searchJobIsOpen === true ? (
                <>
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
                    <JobSubSelect2 />
                  </div>
                </>
              ) : null}
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>지역선택</JobSearchCategoryTitleContainer>

                <div onClick={() => searchRegionToggle()}>
                  <input
                    style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
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
              </JobSearchCategoryContainer>

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
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>학력선택</JobSearchCategoryTitleContainer>
                <RadioBtnContainer>
                  <RadioBtn value="전체" name="학력선택" onChange={handleRadioChangedegree}></RadioBtn>
                  <RadioBtn value="대졸(2~3년)" name="학력선택" onChange={handleRadioChangedegree}></RadioBtn>
                  <RadioBtn value="대졸(4년)" name="학력선택" onChange={handleRadioChangedegree}></RadioBtn>
                  <RadioBtn value="석사" name="학력선택" onChange={handleRadioChangedegree}></RadioBtn>
                  <RadioBtn value="박사" name="학력선택" onChange={handleRadioChangedegree}></RadioBtn>
                </RadioBtnContainer>
              </JobSearchCategoryContainer>

              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>경력선택</JobSearchCategoryTitleContainer>
                <RadioBtnContainer>
                  <RadioBtn value="관계없음" name="경력선택" onChange={handleRadioChangecareer}></RadioBtn>
                  <RadioBtn value="경력" name="경력선택" onChange={handleRadioChangecareer}></RadioBtn>
                  <RadioBtn value="신입" name="경력선택" onChange={handleRadioChangecareer}></RadioBtn>
                </RadioBtnContainer>
              </JobSearchCategoryContainer>

              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer> 키워드</JobSearchCategoryTitleContainer>
                <SearchBar
                  width="700px"
                  height="20px"
                  placeholder=""
                  borderwidth="1px"
                  bordercolor="#666666"
                  fontsize="15px"
                  hovercolor="#666666"
                />
              </JobSearchCategoryContainer>
            </JobSearchContentContainer>
            <JobSearchBtnContainer>
              <BokBtn1 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
                검색
              </BokBtn1>
              <BokBtn2 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
                초기화
              </BokBtn2>
            </JobSearchBtnContainer>
          </div>
        ) : null}
      </JobSearchMainContainer>
    </>
  )
}
