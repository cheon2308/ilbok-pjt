import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
}

interface ComponentProps {
  props: Array<Props>
}

const FilterSelectWrapper = styled.div`
  width: 100%;
  max-width: 378px;
  margin-right: 2em;
`

const StyledSelect = styled.select`
  width: 100%;
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
  &:hover {
    border: 1px solid #848484;
    box-shadow: inset 0 0 0 1px #bcb7d9;
  }
`

const FilterSelect = ({ props }: ComponentProps) => {
  return (
    <FilterSelectWrapper>
      <StyledSelect>
        {props.map((ele: Props, i: number) => (
          <option key={i} value={ele.name}>
            {ele.name}
          </option>
        ))}
      </StyledSelect>
    </FilterSelectWrapper>
  )
}

export default FilterSelect
