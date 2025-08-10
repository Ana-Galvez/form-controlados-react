import { useState, type FormEvent } from "react"

const App = () => {
  const [nombre,setNombre] =useState("")
  const [color,setColor] =useState("")
  const [condiciones,setCondiciones] =useState(false)

  const handleSubmit=  (e:FormEvent) => {
    e.preventDefault()
    console.log(nombre + " " + color + " " + condiciones)
  }
  return (
    <div className="container mx-auto mt-3">
      <h1>Formulario controlado de clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" placeholder="Ingrese su nombre completo" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className="mb-3">
          <select defaultValue="" className="form-select" value={color} onChange={(e)=>setColor(e.target. value)}>
            <option value="" disabled>Seleccione un color</option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="verde">Verde</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" checked={condiciones} onChange={(e)=>setCondiciones(e.target.checked)}/>
          <span className="form-check-label">Aceptar las condiciones</span>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}
export default App