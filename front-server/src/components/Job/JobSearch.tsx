import React, { useEffect, useRef } from 'react'
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
import { JobCode, CityName, JobFamilyCode, JobFamilyName, JobName, JobSubName, RegionName, CityCode } from '../../atom'
import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'
import { JobMainCategoryContainer } from '../Common/JobListContainer'
import JobListItem from '../Common/JobListItem'
import Paging from '../Common/Paging'

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

export default function JobSearch({ keyword }: any) {
  const [searchIsOpen, setSearchIsOpen] = useState(true)
  const [searchJobIsOpen, setSearchJobIsOpen] = useState(false)
  const [searchRegionIsOpen, setSearchRegionIsOpen] = useState(false)

  const [jobFamilyName] = useRecoilState(JobFamilyName)
  const [jobSubName] = useRecoilState(JobSubName)
  const [jobName] = useRecoilState(JobName)

  const [regionName] = useRecoilState(RegionName)
  const [cityName] = useRecoilState(CityName)
  const [searchResult, setSearchResult] = useState<number | undefined>(0)
  const [ResultList, setResultList] = useState([])
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
  //직종
  const [code, setCode] = useRecoilState(JobCode)
  //여기까지 직종

  //지역
  const [city, setCity] = useRecoilState(CityCode)
  //여기까지 지역

  // 학력
  const [selectedDegree, setSelectedDegree] = useState<number | null>()
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
    setSelectedDegree(radioValuesDegree[value])
  }
  //여기까지(학력)

  //경력
  const [selectedCareer, setSelectedCareer] = useState<string | null>()
  const handleRadioChangecareer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedCareer(value)
  }
  //여기까지 경력

  //키워드
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(keyword)

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSelectedKeyword(value)
  }
  //여기까지 키워드
  //post 요청
  const handlePost = async (data: Record<string, any>) => {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + `/wanted/search`, data)
    // console.log('api요청')
    // console.log(res.data)
    return res.data
  }

  const { mutate, error, isError, isLoading } = useMutation(['handlePost'], handlePost, {
    onSuccess: (data) => {
      setResultList(data)
      setCount(data.length)
      setSearchResult(1)
    },
    onError: (error) => {
      // console.log('error:', error)
      // 에러 발생 후 실행할 작업
    },
  })
  const handleSearch = () => {
    mutate({
      city_code: city,
      job_code: code,
      degree_code: selectedDegree,
      career: selectedCareer,
      keyword: selectedKeyword,
    })
  }

  // 검색 결과
  const myTagRef = useRef<HTMLDivElement>(null)

  const [page, setPage] = useState(1)
  const [size] = useState(10)
  const [count, setCount] = useState(3000)

  const scrollToMyTag = () => {
    if (myTagRef.current) {
      myTagRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleToPage = (page: number) => {
    setPage(page)
    scrollToMyTag()
  }

  //

  //   # 전체 데이터 리스트
  // data = [1, 2, 3, ..., 39, 40]

  // # 페이지당 보여줄 데이터 개수
  // page_size = 10

  // # 현재 페이지 번호
  // current_page = 2

  // # 페이지 시작 인덱스 계산
  // start_index = (current_page - 1) * page_size

  // # 페이지 끝 인덱스 계산
  // end_index = current_page * page_size

  // # 해당 페이지의 데이터 리스트
  //   page_data = data[start_index:end_index]
  const start_index = (page - 1) * size
  const end_index = page * size
  useEffect(() => {
    if (selectedKeyword !== null) {
      handleSearch()
    }
  }, [])

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
                    <div style={{ marginRight: '10px' }}>
                      <JobSelect />
                    </div>
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
                  onChange={handleKeyword}
                />
              </JobSearchCategoryContainer>
            </JobSearchContentContainer>
            <JobSearchBtnContainer>
              <BokBtn1
                onClick={handleSearch}
                sigwidth="150px"
                sigheight="50px"
                sigfontsize="20px"
                sigborderradius={25}
                sigmargin="10px"
              >
                검색
              </BokBtn1>
              <BokBtn2 sigwidth="150px" sigheight="50px" sigfontsize="20px" sigborderradius={25} sigmargin="10px">
                초기화
              </BokBtn2>
            </JobSearchBtnContainer>
          </div>
        ) : null}
      </JobSearchMainContainer>

      {searchResult === 1 ? (
        <div>
          <JobSearchTitle>검색결과</JobSearchTitle>
          <JobSearchSubTitle>
            <SearchResultName>{selectedKeyword}</SearchResultName> 검색 결과입니다.
          </JobSearchSubTitle>
          <br />
          <div>
            <br />
            <div
              style={{ backgroundColor: '#e7f4ef', height: '50px', paddingTop: '25px', marginBottom: '10px' }}
              ref={myTagRef}
            >
              <div>
                <JobMainCategoryContainer>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>기업명</div>
                  <div style={{ flex: '4 1 0', textAlign: 'center' }}>채용공고명/지원자격</div>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>급여/근무일수</div>
                  <div style={{ flex: '2 1 0', textAlign: 'center' }}>등록일/마감일</div>
                </JobMainCategoryContainer>
              </div>
            </div>
            <div style={{ marginTop: '5px' }}>
              <div>
                {ResultList.length >= 1 ? (
                  ResultList.slice(start_index, end_index).map((item: any) => (
                    <JobListItem
                      key={item.wantedCode}
                      company={item.company}
                      title={item.title}
                      salTpNm={item.salTpNm}
                      region={item.work_region}
                      holidayTpNm={item.holidayTpNm}
                      minEdubg={item.minEdubg}
                      career={item.career}
                      regDt={item.regDate}
                      closeDt={item.closeDate}
                      wantedAuthNo={item.wantedCode}
                      degreeCode={item.degreeCode}
                      workingDay={item.workingDay}
                      salary={item.salary}
                      salaryType={item.salaryType}
                    />
                  ))
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0 50px 0' }}>
                    <JobSearchContentContainer>검색결과가 없습니다.</JobSearchContentContainer>
                  </div>
                )}
              </div>

              <div style={{ margin: '30px 0 30px 0' }}>
                <Paging page={page} count={count} setPage={handleToPage} size={size} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
const SearchResultName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #76dcb0;
`
