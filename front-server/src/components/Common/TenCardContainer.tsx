import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import '../../assets/styles/Common/TenCardContainer.css'
import TenCard from './TenCard'
interface TenCardProps {
  items: any[]
  title: string
  description: string
  name: string
}

const TenCardTitleContainer = styled.div`
  margin: 0 0 50px 0;
`

const TenCardTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  line-height: 30px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const TenCardContent = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  font-weight: 400;
  color: #666666;
  line-height: 30px;
`

const TenCardCardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`

const TenCardMainContainer = styled.div`
  // margin: 0 20vw 0 20vw;
`

const TenCardName = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`

const TenCardContainer = ({ items, name, title, description }: TenCardProps) => {
  return (
    <>
      <TenCardMainContainer>
        <TenCardTitleContainer>
          <TenCardTitle>
            <TenCardName>{name}</TenCardName>
            {title}
          </TenCardTitle>
          <TenCardContent>{description}</TenCardContent>
        </TenCardTitleContainer>

        <TenCardCardContainer className="Scroll-color">
          {items &&
            items.map((item, index) => (
              <TenCard
                key={index}
                company={item.company}
                title={item.title}
                salTpNm={item.salTpNm}
                region={item.work_region}
                holidayTpNm={item.holidayTpNm}
                minEdubg={item.minEdubg}
                career={item.career}
                regDt={item.regDate}
                closeDt={item.closeDate}
                wantedCode={item.wantedCode}
              />
            ))}
        </TenCardCardContainer>
      </TenCardMainContainer>
    </>
  )
}

export default TenCardContainer
