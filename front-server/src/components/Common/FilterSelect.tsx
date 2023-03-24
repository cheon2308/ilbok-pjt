import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

interface Props {
  name: string
}

interface ComponentProps {
  props: Array<Props>
  width: string
  height: string
  borderwidth: string
  bordercolor: string
}

interface StyledSelectProps {
  width: string
  height: string
  borderwidth: string
  bordercolor: string
}

const FilterSelectWrapper = styled.div`
  width: 100%;
`

const StyledSelect = styled.select<StyledSelectProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderwidth} solid ${(props) => props.bordercolor};
  padding: 8px;
  border-radius: 5px;
  font-size: 20px;
  color: #666666;
  background-color: #fbfbfd;

  &:hover {
    border: 2px solid #c6f0de;
    box-shadow: inset 0 0 0 1px #c6f0de;
  }
  &:focus {
    outline: none !important;
  }
`

const FilterSelect = ({ props, width, height, borderwidth, bordercolor }: ComponentProps) => {
  return (
    <FilterSelectWrapper>
      <StyledSelect width={width} height={height} borderwidth={borderwidth} bordercolor={bordercolor}>
        {props.map((ele: Props, i: number) => (
          <option key={i} value={ele.name}>
            {ele.name}
          </option>
        ))}
      </StyledSelect>
    </FilterSelectWrapper>
  )
}

FilterSelect.propTypes = {
  map: PropTypes.any.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderwidth: PropTypes.string.isRequired,
  bordercolor: PropTypes.string.isRequired,
}

export default FilterSelect