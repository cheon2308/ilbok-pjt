import React from 'react'
import styled from 'styled-components'
import JobListItem from './JobListItem'
import Paging from './Paging'
import {useState} from 'react'



const items = [
    { wantedAuthNo: '공고 번호', company: '(주)코리아환경산업', title: '관저더샵 1차 아파트 외곽구인', salTpNm : '월급 152만원 이상', region: '대전광역시 서구 ', holidayTpNm: '주 5일 근무', minEdubg: '학력무관',  career: '관계없음', regDt:'23/03/24', closeDt: '23/03/26' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
    { wantedAuthNo: '공고 번호', company: '회사 이름', title: '공고 이름', salTpNm : '시급,월급 연봉', region: '지역', holidayTpNm: '근무날짜', minEdubg: '학력',  career: '경력', regDt:'등록일', closeDt: '마감일' },
  ]
const JobListContainer = () => {

   
  const [page, setPage] = useState(1)
  const [size] = useState(16)
  const [count, setCount] = useState(100)
  const handleToPage = (page: number) => {
    setPage(page)
  }

  

  return (
   <>
   <div className='Main-container' style={{marginTop: '5px'}}>
    <div>
     {items.map((item) => (
            <JobListItem key={item.wantedAuthNo} company={item.company} title={item.title} salTpNm={item.salTpNm} region={item.region} holidayTpNm={item.holidayTpNm} minEdubg={item.minEdubg} career={item.career} regDt={item.regDt} closeDt={item.closeDt} wantedAuthNo={item.wantedAuthNo}/>
          ))}</div>
          
    <div style={{margin: '30px 0 30px 0'}}>
    <Paging  page={page} count={count} setPage={handleToPage} size={size} />      </div>
    </div>
   </>
  )
}

export default JobListContainer 