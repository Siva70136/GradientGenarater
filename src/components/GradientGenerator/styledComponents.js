// Style your elements here

import styled from 'styled-components'

export const Main = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`
export const DirectionItems = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
`
export const Heading = styled.h1`
  font-size: 22px;
`
export const CustomButton = styled.button`
  border: none;
  margin-top: 10px;
  color: white;
  background-color: blue;
  padding: 7px;
`
