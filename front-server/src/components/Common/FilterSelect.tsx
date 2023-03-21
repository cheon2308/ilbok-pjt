import React from 'react'
import styled from 'styled-components'

const FilterSelect = (props: []) => {
  return (
    <div>
      {props.map((ele: string, i: number) => (
        <option key={i} value={ele}>
          {ele}
        </option>
      ))}
    </div>
  )
}
export default FilterSelect
