import React, { useRef } from 'react'
import styled from 'styled-components'
import JobListItem from './JobListItem'
import Paging from './Paging'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllWanted } from '../../api/MainApi'
import { BeatLoader } from 'react-spinners'
export const JobMainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #666666;
`
const JobListContainer = () => {
  const myTagRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
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

  const { isLoading, data } = useQuery({
    queryKey: ['listGetAllWanted', page],
    queryFn: () => getAllWanted(page),
  })

  if (isLoading || data === undefined)
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
          <BeatLoader color="#C6F0DE" size={50} />
        </div>
      </>
    )

  const listDatas = data.content
  // console.log(listDatas)

  return (
    <>
      <div
        style={{ backgroundColor: '#e7f4ef', height: '50px', paddingTop: '25px', marginBottom: '50px' }}
        ref={myTagRef}
      >
        <div className="Main-container">
          <JobMainCategoryContainer>
            <div style={{ flex: '2 1 0', textAlign: 'center' }}>기업명</div>
            <div style={{ flex: '4 1 0', textAlign: 'center' }}>채용공고명/지원자격</div>
            <div style={{ flex: '2 1 0', textAlign: 'center' }}>급여/근무일수</div>
            <div style={{ flex: '2 1 0', textAlign: 'center' }}>등록일/마감일</div>
          </JobMainCategoryContainer>
        </div>
      </div>
      <div className="Main-container" style={{ marginTop: '5px' }}>
        <div>
          {listDatas.map((item: any) => (
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
          ))}
        </div>

        <div style={{ margin: '30px 0 30px 0' }}>
          <Paging page={page} count={count} setPage={handleToPage} size={size} />
        </div>
      </div>
    </>
  )
}

export default JobListContainer