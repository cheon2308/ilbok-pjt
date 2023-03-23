import React from 'react'
import styled from 'styled-components'
import RadioBtn from '../Common/RadioBtn'
import SearchBar from '../Common/SearchBar'

const JobSearchMainContainer = styled.div`
  margin: 100px 0 100px 0;
`
const JobSearchTitle = styled.div``

const JobSearchTitleContainer = styled.div``

const JobSearchSubTitle = styled.div``

const JobSearchContentContainer = styled.div``

const JobSearchCategoryContainer = styled.div``

const JobSearchBtnContainer = styled.div``

export default function JobSearch() {
  return (
    <>
      <JobSearchMainContainer>
        <JobSearchTitleContainer>
          <JobSearchTitle>일자리 검색</JobSearchTitle>
          <JobSearchSubTitle>일복은 워크넷과 연계해서 채용 정보를 제공하고 있습니다.</JobSearchSubTitle>
        </JobSearchTitleContainer>
        <JobSearchContentContainer>
          <JobSearchCategoryContainer>
            직종선택
            <SearchBar
              width="250px"
              height="20px"
              placeholder=""
              borderwidth="2px"
              bordercolor="#666666"
              fontsize="15px"
            />
          </JobSearchCategoryContainer>
          <JobSearchCategoryContainer>
            지역선택
            <SearchBar
              width="250px"
              height="20px"
              placeholder=""
              borderwidth="2px"
              bordercolor="#666666"
              fontsize="15px"
            />
          </JobSearchCategoryContainer>
          <JobSearchCategoryContainer>
            학력선택
            <RadioBtn value="전체" name="학력선택"></RadioBtn>
            <RadioBtn value="중졸이하" name="학력선택"></RadioBtn>
            <RadioBtn value="고졸" name="학력선택"></RadioBtn>
            <RadioBtn value="전문대졸" name="학력선택"></RadioBtn>
            <RadioBtn value="대졸" name="학력선택"></RadioBtn>
            <RadioBtn value="대학원이상" name="학력선택"></RadioBtn>
            <RadioBtn value="기타" name="학력선택"></RadioBtn>
          </JobSearchCategoryContainer>
          <JobSearchCategoryContainer>
            고용조건
            <RadioBtn value="무관" name="고용조건"></RadioBtn>
            <RadioBtn value="상용직" name="고용조건"></RadioBtn>
            <RadioBtn value="계약직" name="고용조건"></RadioBtn>
            <RadioBtn value="계약직(시간제)" name="고용조건"></RadioBtn>
            <RadioBtn value="파견근로" name="고용조건"></RadioBtn>
            <RadioBtn value="상용직(시간제)" name="고용조건"></RadioBtn>
            <RadioBtn value="기타" name="고용조건"></RadioBtn>
          </JobSearchCategoryContainer>
          <JobSearchCategoryContainer>
            경력선택
            <RadioBtn value="무관" name="경력선택"></RadioBtn>
            <RadioBtn value="신입" name="경력선택"></RadioBtn>
            <RadioBtn value="경력" name="경력선택"></RadioBtn>
            <RadioBtn value="기타" name="경력선택"></RadioBtn>
          </JobSearchCategoryContainer>
          <JobSearchCategoryContainer>급여조건</JobSearchCategoryContainer>
          <JobSearchCategoryContainer>
            키워드
            <SearchBar
              width="250px"
              height="20px"
              placeholder=""
              borderwidth="2px"
              bordercolor="#666666"
              fontsize="15px"
            />
          </JobSearchCategoryContainer>
        </JobSearchContentContainer>
        <JobSearchBtnContainer></JobSearchBtnContainer>
      </JobSearchMainContainer>
    </>
  )
}
