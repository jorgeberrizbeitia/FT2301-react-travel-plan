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

  const [ expenses, setExpenses ] = useState(initialDataTest) // este es nuestro estado completo
  const [ expensesToDisplay, setExpensesToDisplay ] = useState(initialDataTest) // el estado a renderizar
  const [ isFormShowing, setIsFormShowing ] = useState(false)


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
    setExpensesToDisplay([...expensesToDisplay, newExpense])
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
      // if (eachExpense.name === searchInput) {
      if ( eachExpense.name.includes(searchInput) ) {
        return true // incluyelo
      } else {
        return false // no lo incluyas
      }
    })

    console.log(filteredExpenses) // []
    // setExpenses(filteredExpenses)
    setExpensesToDisplay(filteredExpenses) // modificamos el array segundario

  }

  const showForm = () => {
    if (isFormShowing === true) {
      setIsFormShowing(false)
    } else {
      setIsFormShowing(true)
    }

    // setIsFormShowing(!isFormShowing) // lo opuesto al valor booleano actual

  }

  return (
    <div>

      <h2>Plan de Gastos de Viaje</h2>
      
      <button onClick={showForm}>Ver Formulario</button>
      {/* <button onClick={() => setIsFormShowing(!isFormShowing)}>Ver Formulario</button> */}

      {/* forma sencilla */}

      { isFormShowing === true ? <AddForm addNewExpense={addNewExpense}/> : null }
      

      {/* forma avanzada */}
      {/* <AddForm setExpenses={setExpenses} setExpensesToDisplay={setExpensesToDisplay}/> */}

      <SearchForm filterExpenses={filterExpenses}/>


      {expensesToDisplay.map((eachExpense) => {
        // console.log(initialDataTest)
        return (
          <Expense key={eachExpense.name} expense={eachExpense} />
        )
      })}


    </div>
  )
}

export default TravelPlan