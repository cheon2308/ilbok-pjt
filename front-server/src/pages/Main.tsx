import React from 'react'
import SearchBar from '../components/Common/SearchBar'
import Card from '../components/Common/Card'
import CarouselComponent from '../components/Common/Carousel'
import styled from 'styled-components'
import mainImage from '../assets/image/mainImage.png'
import { useState } from 'react'
import Footer from '../components/Common/Footer'
import Select from 'react-select'

const Ilbok = styled.div`
  margin: 0 12vw 0 12vw;
`

const IlbokMain = styled.div`
  height: 450px;
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
const SearchContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
const StyledSelect = styled(Select)`
  width: 150px;
`
const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  interface NameObj {
    name: number
  }
  const nameList: NameObj[] = [{ name: 1 }, { name: 2 }]

  const items = [
    { title: 'Item 1', description: 'This is the first item', image: 'https://picsum.photos/400/200?random=1' },
    { title: 'Item 2', description: 'This is the second item', image: 'https://picsum.photos/400/200?random=2' },
    { title: 'Item 3', description: 'This is the third item', image: 'https://picsum.photos/400/200?random=3' },
    { title: 'Item 4', description: 'This is the fourth item', image: 'https://picsum.photos/400/200?random=4' },
    { title: 'Item 5', description: 'This is the fifth item', image: 'https://picsum.photos/400/200?random=5' },
  ]

  const handleItemChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
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

              <IlbokMainSubtitle> 알맞은 일자리와 복지를 제공합니다.</IlbokMainSubtitle>
            </IlbokTitleContainer>
          </IlbokMainContainer>
        </IlbokMain>
      </Ilbok>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          textAlign: 'center',
          backgroundColor: '#e7f4ef',
        }}
      >
        <SearchBar width="60%" height="30px" placeholder="Search" />
        <SearchForms>
          <FilterSelect>
            <option value="">전체지역</option>
            {nameList.map((ele: NameObj, i: number) => (
              <option key={i} value={ele.name}>
                {ele.name}
              </option>
            ))}
          </FilterSelect>
          <FilterInput type="text" placeholder="프로젝트 제목 검색" />
        </SearchForms>
      </div>
      <Ilbok>
        <div style={{ marginTop: '30px' }}>
          <CarouselComponent
            items={items.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} image={item.image} />
            ))}
            activeIndex={activeIndex}
            onChange={handleItemChange}
          />
        </div>
      </Ilbok>

      <Footer />
    </>
  )
}

export default MainPage

const FilterInput = styled.input`
  width: 100%;
  max-width: 378px;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #d7e2eb;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fbfbfd;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #263747;
  &:hover {
    border: 1px solid #3396f4;
    box-shadow: inset 0 0 0 1px#3396f4;
  }
  &.active-warning {
    margin-bottom: 4px;
    border: 1px solid #f44336;
    box-shadow: inset 0 0 0 1px #ff77774d;
  }
`
const SearchForms = styled.div`
  margin: 0;
  width: 70%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-bottom: 8px;
`
const FilterSelect = styled.select`
  width: 100%;
  max-width: 378px;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #d7e2eb;
  border-radius: 4px;
  box-sizing: border-box;
  background-size: 0.625rem 0.3125rem;
  background-color: #fbfbfd;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #263747;
  margin-right: 2em;
  &:hover {
    border: 1px solid #848484;
    box-shadow: inset 0 0 0 1px#bcb7d9;
  }
`
