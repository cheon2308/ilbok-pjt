import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import '../../assets/styles/Common/TenCardContainer.css'
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
`

const TenCardContent = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  font-weight: 400;
  color: #666666;
`

const TenCardCardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`

const TenCardMainContainer = styled.div`
  margin: 50px 20vw 50px 20vw;
`

const TenCardName = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #76dcb0;
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
          <div style={{ marginBottom: '10px' }}>
            {items.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </TenCardCardContainer>
      </TenCardMainContainer>
    </>
  )
}

export default TenCardContainer
