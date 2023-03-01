import { useState } from "react"
import AddForm from "./AddForm"
import Expense from "./Expense"
import SearchForm from "./SearchForm"

const initialDataTest = [
  { name: "hotel", price: "80" },
  { name: "viaje", price: "120" },
  { name: "desayunos", price: "20" },
]

function TravelPlan() {

  const [ expenses, setExpenses ] = useState(initialDataTest)


  const addNewExpense = (newExpense) => {
    console.log("invocando addNewExpense desde componente hijo")
    console.log("newExpense desde TravelPlan", newExpense)

    // clonamos el array del estado
    // agregamos el nuevo elemento
    // usamos la funcion setExpenses para actualizar

    // const stateClone = [...expenses]
    // stateClone.push(newExpense)
    // setExpenses(stateClone)

    setExpenses([...expenses, newExpense])
  }

  const filterExpenses = (searchInput) => {
    console.log("intentando filtrar el estado de expenses")
    console.log(searchInput) // "hotel"

    // ????

    // .filter((cadaElemento) => {
    //   // true
    //   // false
    // })
    
    const filteredExpenses = expenses.filter((eachExpense) => {
      if (eachExpense.name === searchInput) {
        return true // incluyelo
      } else {
        return false // no lo incluyas
      }
    })

    console.log(filteredExpenses)
    setExpenses(filteredExpenses)

  }

  return (
    <div>

      <h2>Plan de Gastos de Viaje</h2>
      
      {/* forma sencilla */}
      <AddForm addNewExpense={addNewExpense}/>

      {/* forma avanzada */}
      {/* <AddForm setExpenses={setExpenses}/> */}

      <SearchForm filterExpenses={filterExpenses}/>


      {expenses.map((eachExpense) => {
        // console.log(initialDataTest)
        return (
          <Expense key={eachExpense.name} expense={eachExpense} />
        )
      })}


    </div>
  )
}

export default TravelPlan