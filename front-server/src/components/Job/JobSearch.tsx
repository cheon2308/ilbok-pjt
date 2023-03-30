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
  const [jobSelectCode, setJobSelectCode] = useState('')
  const [jobSelectName, setJobSelectName] = useState('')
  const [jobSubSelectCode, setJobSubSelectCode] = useState('')
  const [jobSubSelectName, setJobSubSelectName] = useState('')
  const [jobSubSelect2Name, setJobSubSelect2Name] = useState('')
  const [regionSelectCode, setRegionSelectCode] = useState('')
  const [regionSelectName, setRegionSelectName] = useState('')
  const [citySelectName, setCitySelectName] = useState('')

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
  const jobSelectCodeFunc = React.useCallback(
    (e: any) => {
      setJobSelectCode(e)
    },
    [jobSelectCode]
  )

  const jobSelectNameFunc = React.useCallback(
    (e: any) => {
      setJobSelectName(e)
    },
    [jobSelectName]
  )

  const jobSubSelectNameFunc = React.useCallback(
    (e: any) => {
      setJobSubSelectName(e)
    },
    [jobSubSelectName]
  )

  const jobSubSelectCodeFunc = React.useCallback(
    (e: any) => {
      setJobSubSelectCode(e)
    },
    [jobSubSelectCode]
  )

  const jobSubSelect2NameFunc = React.useCallback(
    (e: any) => {
      setJobSubSelect2Name(e)
    },
    [jobSubSelectName]
  )

  const regionSelectCodeFunc = React.useCallback(
    (e: any) => {
      setRegionSelectCode(e)
    },
    [regionSelectCode]
  )

  const regionSelectNameFunc = React.useCallback(
    (e: any) => {
      setRegionSelectName(e)
    },
    [regionSelectName]
  )

  const cityselectNameFunc = React.useCallback(
    (e: any) => {
      setCitySelectName(e)
    },
    [citySelectName]
  )

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
                    value={jobSelectName}
                  ></input>
                  <input
                    style={{ width: '150px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobSubSelectName}
                  ></input>
                  <input
                    style={{ width: '150px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={jobSubSelect2Name}
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
                    <JobSelect jobSelectCodeFunc={jobSelectCodeFunc} jobSelectNameFunc={jobSelectNameFunc} />
                    <JobSubSelect
                      jobSelectCode={jobSelectCode}
                      jobSubSelectNameFunc={jobSubSelectNameFunc}
                      jobSubSelectCodeFunc={jobSubSelectCodeFunc}
                    />
                    <JobSubSelect2 jobSubSelectCode={jobSubSelectCode} jobSubSelect2NameFunc={jobSubSelect2NameFunc} />
                  </div>
                </>
              ) : null}
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>지역선택</JobSearchCategoryTitleContainer>

                <div onClick={() => searchRegionToggle()}>
                  <input
                    style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={regionSelectName}
                  ></input>
                  <input
                    style={{ width: '250px', height: '20px', fontSize: '15px', padding: '10px 10px 10px 15px' }}
                    disabled
                    value={citySelectName}
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
                  <RegionSelect
                    regionSelectCodeFunc={regionSelectCodeFunc}
                    regionSelectNameFunc={regionSelectNameFunc}
                  />
                  <CitySelect regionSelectCode={regionSelectCode} cityselectNameFunc={cityselectNameFunc} />
                </div>
              ) : null}
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>학력선택</JobSearchCategoryTitleContainer>
                <RadioBtnContainer>
                  <RadioBtn value="전체" name="학력선택"></RadioBtn>
                  <RadioBtn value="중졸이하" name="학력선택"></RadioBtn>
                  <RadioBtn value="고졸" name="학력선택"></RadioBtn>
                  <RadioBtn value="전문대졸" name="학력선택"></RadioBtn>
                  <RadioBtn value="대졸" name="학력선택"></RadioBtn>
                  <RadioBtn value="대학원이상" name="학력선택"></RadioBtn>
                  <RadioBtn value="기타" name="학력선택"></RadioBtn>
                </RadioBtnContainer>
              </JobSearchCategoryContainer>
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>고용조건</JobSearchCategoryTitleContainer>
                <RadioBtnContainer>
                  <RadioBtn value="무관" name="고용조건"></RadioBtn>
                  <RadioBtn value="상용직" name="고용조건"></RadioBtn>
                  <RadioBtn value="계약직" name="고용조건"></RadioBtn>
                  <RadioBtn value="계약직(시간제)" name="고용조건"></RadioBtn>
                  <RadioBtn value="파견근로" name="고용조건"></RadioBtn>
                  <RadioBtn value="상용직(시간제)" name="고용조건"></RadioBtn>
                  <RadioBtn value="기타" name="고용조건"></RadioBtn>
                </RadioBtnContainer>
              </JobSearchCategoryContainer>
              <JobSearchCategoryContainer>
                <JobSearchCategoryTitleContainer>경력선택</JobSearchCategoryTitleContainer>
                <RadioBtnContainer>
                  <RadioBtn value="무관" name="경력선택"></RadioBtn>
                  <RadioBtn value="신입" name="경력선택"></RadioBtn>
                  <RadioBtn value="경력" name="경력선택"></RadioBtn>
                  <RadioBtn value="기타" name="경력선택"></RadioBtn>
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
