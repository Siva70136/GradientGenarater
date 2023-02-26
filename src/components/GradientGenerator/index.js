import {Component} from 'react'
import {
  Main,
  App,
  ColorContainer,
  DirectionItems,
  CustomButton,
  Heading,
} from './styledComponents'
import GradientDirections from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeTab: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323 , #014f7b`,
  }

  color1Change = event => {
    this.setState({
      color1: event.target.value,
    })
  }

  color2Change = event => {
    this.setState({
      color2: event.target.value,
    })
  }

  direction = value => {
    this.setState({
      activeTab: value,
    })
  }

  onGenerate = () => {
    const {color1, color2, activeTab} = this.state
    this.setState({
      gradientValue: `to ${activeTab}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {color1, color2, activeTab, gradientValue} = this.state

    console.log(color1)

    return (
      <Main gradientValue={gradientValue} data-testid="gradientGenerator">
        <App>
          <Heading>Generate a CSS Color Gradient</Heading>
          <p>Choose direction</p>
          <p>Pick the Colors</p>
          <DirectionItems>
            {gradientDirectionsList.map(each => (
              <GradientDirections
                item={each}
                key={each.directionId}
                direction={this.direction}
                activeTab={activeTab}
              />
            ))}
          </DirectionItems>

          <ColorContainer>
            <p>{color1}</p>
            <p>{color2}</p>
          </ColorContainer>
          <ColorContainer>
            <input type="color" value={color1} onChange={this.color1Change} />
            <input type="color" value={color2} onChange={this.color2Change} />
          </ColorContainer>
          <CustomButton type="button" onClick={this.onGenerate}>
            Generate
          </CustomButton>
        </App>
      </Main>
    )
  }
}

export default GradientGenerator
