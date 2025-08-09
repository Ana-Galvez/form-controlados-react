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
    <>
      <h1>Formulario controlado de clientes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre completo" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        <h2>{nombre}</h2>
        <br />
        <select defaultValue="" value={color} onChange={(e)=>setColor(e.target.value)}>
          <option value="" disabled>Seleccione un color</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="verde">Verde</option>
        </select>
        <h2>{color}</h2>
        <br />
        <input type="checkbox" checked={condiciones} onChange={(e)=>setCondiciones(e.target.checked)}/>
        <span>Aceptar las condiciones</span>
        <h2>{condiciones}</h2>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
export default App