// Style your elements here

import styled from 'styled-components'

export const Item = styled.li`
  list-style: none;
  // opacity: ${props => (props.activeTab === props.id ? 1 : 0.5)};
`

export const Button = styled.button`
  border: none;
  opacity: ${props => (props.activeTab === props.id ? 1 : 0.5)};
  color: black;
  background-color: white;
  padding: 7px;
  cursor: pointer;
`
