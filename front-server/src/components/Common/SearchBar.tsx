import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  width: string
  height: string
  border_radius: string // make border_radius optional with a default value
  placeholder: string // make placeholder optional
}

const Input = styled.input<SearchBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: ${(props) => props.border_radius}; // use default value if border_radius is not provided
  padding: 8px;
`

const SearchBar = (props: SearchBarProps) => {
  return <Input type="text" {...props} />
}

export default SearchBar
