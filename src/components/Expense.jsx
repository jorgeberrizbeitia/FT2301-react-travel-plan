

function Expense(props) {

  const { name, price } = props.expense
  // console.log(props)
  return (
    <div>
      <h3>Gasto: {name}</h3>
      <h3>Valor: {price}</h3>
    </div>
  )
}

export default Expense