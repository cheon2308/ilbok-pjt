import React from 'react'
import SearchBar from '../components/Common/SearchBar'
import Card from '../components/Common/Card'
import CarouselComponent from '../components/Common/Carousel'
import styled from 'styled-components'
import mainImage from '../assets/image/mainImage.png'
import { useState } from 'react'
import Footer from '../components/Common/Footer'
import FilterSelect from '../components/Common/FilterSelect'
import { SlMagnifier } from 'react-icons/sl'
import AddInfoNoti from '../components/Common/AddInfoNoti'
import AddInfoNoti2 from '../components/Common/AddInfoNoti2'
import Paging from '../components/Common/Paging'
interface NameList {
  name: string
}
const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const items = [
    { title: 'Item 1', description: 'This is the first item' },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
    { title: 'Item 6', description: 'This is the fifth item' },
    { title: 'Item 7', description: 'This is the fifth item' },
    { title: 'Item 8', description: 'This is the fifth item' },
    // { title: 'Item 9', description: 'This is the fifth item', image: 'https://picsum.photos/400/200?random=9' },
    // { title: 'Item 10', description: 'This is the fifth item', image: 'https://picsum.photos/400/200?random=10' },
  ]

  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }
  const [page, setPage] = useState(1)
  const [size] = useState(16)
  const [count, setCount] = useState(100)
  const handleToPage = (page: number) => {
    setPage(page)
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
          height: '330px',
          textAlign: 'center',
          backgroundColor: '#e7f4ef',
        }}
      >
        <SearchForms>
          <FilterSelectContainer>
            <FilterSelect props={props} width="100%" height="64px" borderwidth="2px" bordercolor="#76DCB0" />
          </FilterSelectContainer>
          <SearchBarContainer>
            <SearchBar
              width="95%"
              height="40px"
              placeholder="검색어를 입력하세요."
              borderwidth="2px"
              bordercolor="#76DCB0"
              fontsize="20px"
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
      </div>
      <Ilbok>
        <AddInfoNoti />
      </Ilbok>
      {/* Card */}
      <Ilbok>
        <RecentlyJobContainer>
          <RecentlyJobTitle>최신 일자리</RecentlyJobTitle>
          <RecentlyJobSubtitle>일복(日福)에서 최근에 게시된 일자리 </RecentlyJobSubtitle>
          <RecentlyJobButton>더보기 ▶</RecentlyJobButton>
          <CardContainer>
            {items.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </CardContainer>
          {/* <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            <CarouselComponent
              items={items.map((item) => (
                <Card key={item.title} title={item.title} description={item.description} image={item.image} />
              ))}
              activeIndex={activeIndex}
              onChange={handleItemChange}
            />
          </div> */}
        </RecentlyJobContainer>
      </Ilbok>
      <Paging page={page} count={count} setPage={handleToPage} size={size}></Paging>
      {/* <Ilbok> */}
      {/* <AddInfoNoti2 /> */}
      {/* </Ilbok> */}
      <Footer />
    </>
  )
}

export default MainPage

const Ilbok = styled.div`
  margin: 0 20vw 0 20vw;
`

const IlbokMain = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IlbokMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 400px;
  width: 100%;
`

const IlbokImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  margin-right: 50px;
`
const IlbokMainImg = styled.img`
  width: 250px;
`

const IlbokTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  margin-left: 50px;
`
const IlbokMainTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #76dcb0;
  margin-top: 20px;
  width: 100%;
  text-align: left;
`
const IlbokMainSubtitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  text-align: left;
`

const SearchForms = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 20vw 0 20vw;
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
    background-color:#c6f0de;
    box-shadow: 0 0 0 1px #c6f0de;

`

const SlMagnifierContainer = styled.div`
  width: 100%;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`

const RecentlyJobTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
  margin-bottom: 20px;
`

const RecentlyJobSubtitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  color: #666666;
`

const RecentlyJobContainer = styled.div`
  margin: 0 0 100px 0;
`

const RecentlyJobButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`
