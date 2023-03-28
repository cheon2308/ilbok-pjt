import React from 'react'
import SearchBar from '../components/Common/SearchBar'
import Card from '../components/Common/Card'
import styled from 'styled-components'
import mainImage from '../assets/image/mainImage.png'
import { useState } from 'react'
import FilterSelect from '../components/Common/FilterSelect'
import { SlMagnifier } from 'react-icons/sl'
import AddInfoNoti from '../components/Common/AddInfoNoti'
import AddInfoNoti2 from '../components/Common/AddInfoNoti2'

const Ilbok = styled.div`
  margin: 0 20vw 0 20vw;
  @media (max-width: 700px) {
    margin: 0 5vw 0 5vw;
  }
`

const IlbokMain = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    height: 450px;
  }
`
const IlbokMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const IlbokImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  margin-right: 50px;
  @media (max-width: 700px) {
    justify-content: center;
    margin: 50px 0 50px 0;
  }
`
const IlbokMainImg = styled.img`
  width: 200px;
  @media (max-width: 700px) {
    width: 150px;
  }
`

const IlbokTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  margin-left: 50px;
  @media (max-width: 700px) {
    margin-left: 0px;
    width: 100%;
  }
`
const IlbokMainTitle = styled.div`
  font-size: 35px;
  font-weight: 800;
  color: #76dcb0;
  margin-top: 20px;
  width: 100%;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 25px;
    margin-top: 0px;
    text-align: center;
  }
`
const IlbokMainSubtitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 15px;
    text-align: center;
  }
`

const SearchForms = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 20vw 0 20vw;

  @media (max-width: 700px) {
    display: none;
  }
`
const MobileSearchForms = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 20vw 0 20vw;
  }
`

const SearchBarContainer = styled.div`
  width: 500px;
`

const FilterSelectContainer = styled.div`
  margin-right: 15px;
`

const SearchButtonContainer = styled.div`
  margin: 15px 0 15px 15px;
`

const SearchButton = styled.button`
  width: 64px;
  height: 64px;
  background-color: #76dcb0;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #c6f0de;
    box-shadow: 0 0 0 1px #c6f0de;
  }

  @media (max-width: 700px) {
    width: 43px;
    height: 43px;
  }
`

const SlMagnifierContainer = styled.div`
  width: 100%;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
`

const RecentlyJobTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const RecentlyJobTitleColor = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`
const RecentlyJobTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  margin-bottom: 20px;
`
const RecentlyJobSubtitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  color: #666666;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const RecentlyJobContainer = styled.div`
  margin: 100px 0 100px 0;
`

const RecentlyJobButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;

  font-weight: 700;
  color: #76dcb0;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    margin-right: 0;
  }
`
const SearchTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 15px;
    text-align: center;
  }
`

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // 최신일자리 데이터
  const newJobItems = [
    {
      wantedAuthNo: '공고 번호',
      company: '(주)코리아환경산업',
      title: '관저더샵 1차 아파트 외곽구인',
      salTpNm: '월급 152만원 이상',
      region: '대전광역시 서구 ',
      holidayTpNm: '주 5일 근무',
      minEdubg: '학력무관',
      career: '관계없음',
      regDt: '23/03/24',
      closeDt: '23/03/26',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
  ]
  // 인기일자리 데이터
  const popularJobItems = [
    {
      wantedAuthNo: '공고 번호',
      company: '(주)코리아환경산업',
      title: '관저더샵 1차 아파트 외곽구인 합니다요',
      salTpNm: '월급 152만원 이상',
      region: '대전광역시 서구 ',
      holidayTpNm: '주 5일 근무',
      minEdubg: '학력무관',
      career: '관계없음',
      regDt: '23/03/24',
      closeDt: '23/03/26',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
    {
      wantedAuthNo: '공고 번호',
      company: '회사 이름',
      title: '공고 이름',
      salTpNm: '시급,월급 연봉',
      region: '지역',
      holidayTpNm: '근무날짜',
      minEdubg: '학력',
      career: '경력',
      regDt: '등록일',
      closeDt: '마감일',
    },
  ]

  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  const props = [{ name: '일자리' }, { name: '복지' }]

  return (
    <>
      {/* Main */}
      <Ilbok>
        <IlbokMain>
          <IlbokMainContainer>
            <IlbokImgContainer>
              <IlbokMainImg src={mainImage} alt="mainImg" />
            </IlbokImgContainer>
            <IlbokTitleContainer>
              <IlbokMainTitle>일복(日福)</IlbokMainTitle>
              <br />

              <IlbokMainSubtitle>나만의 일자리/복지</IlbokMainSubtitle>
              <IlbokMainSubtitle> 알맞은 일자리와 복지를 제공</IlbokMainSubtitle>
            </IlbokTitleContainer>
          </IlbokMainContainer>
        </IlbokMain>
      </Ilbok>

      {/* Search */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '250px',
          textAlign: 'center',
          backgroundColor: '#e7f4ef',
          flexDirection: 'column',
        }}
      >
        <SearchTitle> 일자리와 복지를 손쉽게 찾아보세요.</SearchTitle>
        <SearchForms>
          <FilterSelectContainer>
            <FilterSelect props={props} width="100px" height="64px" borderwidth="2px" bordercolor="#76DCB0" />
          </FilterSelectContainer>

          <SearchBarContainer>
            <SearchBar
              width="95%"
              height="40px"
              placeholder="검색어를 입력하세요."
              borderwidth="2px"
              bordercolor="#76DCB0"
              fontsize="20px"
              hovercolor="#c6f0de"
            />
          </SearchBarContainer>
          <SearchButtonContainer>
            <SearchButton>
              <SlMagnifierContainer>
                <SlMagnifier size="20px" color="white" />
              </SlMagnifierContainer>
            </SearchButton>
          </SearchButtonContainer>
        </SearchForms>

        {/* Mobile Search */}
        <MobileSearchForms>
          {/* <FilterSelectContainer>
            <FilterSelect props={props} width="100px" height="30px" borderwidth="2px" bordercolor="#76DCB0" />
          </FilterSelectContainer>
        */}
          <SearchBarContainer>
            <SearchBar
              width="90%"
              height="20px"
              placeholder="검색어를 입력하세요."
              borderwidth="2px"
              bordercolor="#76DCB0"
              fontsize="15px"
              hovercolor="#c6f0de"
            />
          </SearchBarContainer>
          <SearchButtonContainer>
            <SearchButton>
              <SlMagnifierContainer>
                <SlMagnifier size="20px" color="white" />
              </SlMagnifierContainer>
            </SearchButton>
          </SearchButtonContainer>
        </MobileSearchForms>
      </div>

      {/* 일자리 */}
      <Ilbok>
        <RecentlyJobContainer>
          <RecentlyJobTitleColor>인기 일자리</RecentlyJobTitleColor>
          <RecentlyJobSubtitle>일복(日福)에서 인기있는 일자리 </RecentlyJobSubtitle>
          <RecentlyJobButton>더보기 ▶</RecentlyJobButton>
          <CardContainer>
            {popularJobItems.map((item) => (
              <Card
                key={item.wantedAuthNo}
                company={item.company}
                title={item.title}
                salTpNm={item.salTpNm}
                region={item.region}
                holidayTpNm={item.holidayTpNm}
                minEdubg={item.minEdubg}
                career={item.career}
                regDt={item.regDt}
                closeDt={item.closeDt}
                wantedAuthNo={item.wantedAuthNo}
              />
            ))}
          </CardContainer>
        </RecentlyJobContainer>
      </Ilbok>
      <Ilbok>
        <RecentlyJobContainer>
          <RecentlyJobTitleColor>최신 일자리</RecentlyJobTitleColor>
          <RecentlyJobSubtitle>일복(日福)에서 최근에 게시된 일자리 </RecentlyJobSubtitle>
          <RecentlyJobButton>더보기 ▶</RecentlyJobButton>
          <CardContainer>
            {newJobItems.map((item) => (
              <Card
                key={item.wantedAuthNo}
                company={item.company}
                title={item.title}
                salTpNm={item.salTpNm}
                region={item.region}
                holidayTpNm={item.holidayTpNm}
                minEdubg={item.minEdubg}
                career={item.career}
                regDt={item.regDt}
                closeDt={item.closeDt}
                wantedAuthNo={item.wantedAuthNo}
              />
            ))}
          </CardContainer>
        </RecentlyJobContainer>
      </Ilbok>
    </>
  )
}

export default MainPage

export { RecentlyJobButton, RecentlyJobTitle, RecentlyJobSubtitle, RecentlyJobContainer, CardContainer }
