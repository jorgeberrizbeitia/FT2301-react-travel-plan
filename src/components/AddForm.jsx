import { useState } from "react"

// imports CSS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm(props) {

  const [ nameInput, setNameInput ] = useState("")
  const [ priceInput, setPriceInput ] = useState(0)

  const handleNameChange = (event) => {
    // console.log(event.target.value);

    const realInput = event.target.value.toUpperCase()
    // const newInput = realInput + "TROL"

    if (realInput.length > 10) {
      // mostramos un mensaje de error para que el usuario tenga mejor experiencia
      return;
    }

    setNameInput(realInput)
  }

  const handlePriceChange = (event) => {
    setPriceInput(event.target.value)
  }

  const handleSubmitForm = (event) => {
    // deten todo el comportamiento predefinido de un formulario
    event.preventDefault() // => previene el comportamiendo usual de un formulario
    console.log("intentando recopiar la info y crea un nuevo gasto")

    const newExpense = {
      name: nameInput,
      price: priceInput
    }

    console.log(newExpense) // este newExpense es lo que agregaremos al array de todos los gastos

    // nosotros no tenemos acceso a expenses


    // console.log(expenses)
    // esta es la forma sencilla, mas visible
    props.addNewExpense(newExpense)
    
    // setState("nuevo valor del estado")
    // setState((elEstadoActual) => {
    //  return elValorNuevo 
    // })
      
    // esta es la forma avanzada, menos codigo
    // props.setExpenses((expenses) => {

    //   const stateClone = [...expenses]
    //   stateClone.push(newExpense)
    //   return stateClone

    //   // return [...expenses, newExpense]

    // })

    // props.setExpensesToDisplay((expenses) => {

    //   const stateClone = [...expenses]
    //   stateClone.push(newExpense)
    //   return stateClone

    //   // return [...expenses, newExpense]

    // })

    // limpiamos los campos desdes de crear el expense
    setNameInput("")
    setPriceInput(0)

  }

  return (
    <div>
      
      <Form onSubmit={handleSubmitForm}>
        <Form.Group className="m-3" >
          <Form.Label htmlFor="name">Nombre de Gasto:</Form.Label>
          <Form.Control type="text" name="name" value={nameInput} onChange={handleNameChange}/>
        </Form.Group>


        <Form.Group className="m-3" >
          <Form.Label htmlFor="price">Precio:</Form.Label>
          <Form.Control type="number" name="price" value={priceInput} onChange={handlePriceChange}/>
        </Form.Group>

        <Button variant="outline-success" onClick={handleSubmitForm}>Agregar</Button>
        {/* el handleSubmitForm puede ir en el onSubmit del form o en el onClick del botton */}

      </Form>

    </div>
  )
}

export default AddForm