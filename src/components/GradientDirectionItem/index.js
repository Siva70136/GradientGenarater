// Write your code here
import {Item, Button} from './styledComponents'

const GradientDirections = props => {
  const {item, direction, activeTab} = props
  const {displayText, value} = item
  console.log(activeTab, value)
  const change = () => {
    direction(value)
  }

  return (
    <Item>
      <Button onClick={change} type="button" activeTab={activeTab} id={value}>
        {displayText}
      </Button>
    </Item>
  )
}

export default GradientDirections
