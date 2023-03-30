import React, { useRef } from 'react'
import styled from 'styled-components'
import JobListItem from './JobListItem'
import Paging from './Paging'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllWanted } from '../../api/MainApi'
import { BeatLoader } from 'react-spinners'

const JobListContainer = () => {
  const myTagRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [size] = useState(16)
  const [count, setCount] = useState(100)
  const handleToPage = (page: number) => {
    setPage(page)
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
  console.log(listDatas)

  const scrollToMyTag = () => {
    if (myTagRef.current) {
      myTagRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <div className="Main-container" style={{ marginTop: '5px' }}>
        <div ref={myTagRef}>
          {listDatas.map((item: any) => (
            <JobListItem
              key={item.wantedAuthNo}
              company={item.company}
              title={item.title}
              salTpNm={item.salTpNm}
              region={item.work_region}
              holidayTpNm={item.holidayTpNm}
              minEdubg={item.minEdubg}
              career={item.career}
              regDt={item.regDate}
              closeDt={item.closeDate}
              wantedAuthNo={item.wantedAuthNo}
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
