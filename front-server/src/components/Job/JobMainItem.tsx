import { CarCrash } from '@mui/icons-material'
import React from 'react'
import AddInfoNoti from '../Common/AddInfoNoti'
import JobSearch from './JobSearch'
import { useState } from 'react'
import Card from '../../components/Common/Card'
import TenCardContainer from '../Common/TenCardContainer'
import Paging from '../Common/Paging'
import AddInfoNoti2 from '../Common/AddInfoNoti2'
import styled from 'styled-components'
import JobListContainer from '../Common/JobListContainer'

export default function JobMainItem() {
  // 메인 : 0 / 로그인 : 1 / 로그인+추가정보 : 2
  const [testcode, setTestCode] = useState(2)

  // 비슷한 유저들이 관심있는 items
  const items = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    { title: 'Item 9', description: 'This is the fifth item' },
    { title: 'Item 10', description: 'This is the fifth item' },
  ]

  // 어울리는 일자리 items2
  const items2 = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    { title: 'Item 9', description: 'This is the fifth item' },
    { title: 'Item 10', description: 'This is the fifth item' },
  ]

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <>
      {testcode === 0 ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti />
          </div>
        </div>
      ) : testcode === 1 ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '400px' }}>
          <div className="Main-container">
            <AddInfoNoti2 />
          </div>
        </div>
      ) : testcode === 2 ? (
        <div style={{ backgroundColor: '#e7f4ef', height: '1000px', paddingTop: '80px' }}>
          <TenCardContainer
            items={items}
            name="김유민"
            title="님과 비슷한 유저들이 관심있는 일자리"
            description="일복(日福)에서 추천하는 비슷한 유저들이 관심있는 일자리"
          />
          <div style={{ paddingTop: '80px' }}>
            <TenCardContainer
              items={items2}
              name="김유민"
              title="님과 어울리는 일자리"
              description="일복(日福)에서 추천하는 어울리는 일자리"
            />
          </div>
        </div>
      ) : null}

      <div className="Main-container">
        <JobSearch />
      </div>
      <div style={{ backgroundColor: '#e7f4ef', height: '50px', paddingTop: '25px', marginBottom: '50px'}}>
      <div className="Main-container">
          <JobMainCategoryContainer>
            <div style={{flex: '2 1 0', textAlign:'center'}}>기업명</div>
            <div style={{flex: '4 1 0', textAlign:'center'}}>채용공고명/지원자격</div>
            <div style={{flex: '2 1 0', textAlign:'center'}} >급여/근무일수</div>
            <div style={{flex: '2 1 0', textAlign:'center'}} >등록일/마감일</div>
          
          </JobMainCategoryContainer>
          </div>

      </div>

      <div style={{marginTop:'25px', marginBottom:'25px'}}  
    
      >
        <JobListContainer/>
        
      </div>
    </>
  )
}

const JobMainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #666666;

`