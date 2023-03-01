import Card from 'react-bootstrap/Card';

function Expense(props) {

  const cardStyles = {
    width: "90%"
  }

  const { name, price } = props.expense
  // console.log(props)
  return (
    <Card style={cardStyles}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Valor: {price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Expense