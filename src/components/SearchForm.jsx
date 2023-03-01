import { useState } from "react"

import Form from 'react-bootstrap/Form';

function SearchForm(props) {

  const [ searchInput, setSearchInput ] = useState("")

  const handleSearch = (event) => {
    setSearchInput(event.target.value)
    // no podemos acceder al valor del estado directamente luego de actualizarlo 
    // console.log(searchInput)
    
    props.filterExpenses(event.target.value)

  }

  return (
    <div>

      <h3>Formulario de busqueda</h3>
      <Form.Group className="m-3">
        <Form.Label htmlFor="search">Busca un Gasto: </Form.Label>
        <Form.Control type="text" name="search" value={searchInput} onChange={handleSearch}/>
      </Form.Group>
      {/* abajo es igual pero un una sola linea sin necesidad de la funcion declarada */}
      {/* <input type="text" name="search" value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/> */}

    </div>
  )
}

export default SearchForm