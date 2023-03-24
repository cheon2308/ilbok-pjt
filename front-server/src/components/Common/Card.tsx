import React from 'react'
import styled from 'styled-components'

export interface CardProps {
  title: string
  description: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
`

const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const CardDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`

const Card = ({ title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

export default Card
