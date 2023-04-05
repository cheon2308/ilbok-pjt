import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  width: string
  height: string
  placeholder: string // make placeholder optional
  borderwidth: string
  bordercolor: string
  fontsize: string
  hovercolor: string
  onChange?: (e: any) => void
}

const Input = styled.input<SearchBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderwidth} solid ${(props) => props.bordercolor};
  cursor: pointer;
  border-radius: 5px; // use default value if border_radius is not provided
  padding: 10px 10px 10px 15px;
  font-size: ${(props) => props.fontsize};
  max-width: 600px;
  min-width: 180px;

  &:hover {
    border: ${(props) => props.borderwidth} solid ${(props) => props.hovercolor};
    box-shadow: inset 0 0 0 1px ${(props) => props.hovercolor};
  }
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.hovercolor};
    box-shadow: inset 0 0 0 1px ${(props) => props.hovercolor};
  }
`

const SearchBar = (props: SearchBarProps) => {
  return <Input type="text" {...props} />
}

export default SearchBar
