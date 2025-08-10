import { useState, type FormEvent } from "react";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [condiciones, setCondiciones] = useState(false);

  const [salidaInput, setSalidaInput] = useState({
    nombre: false,
    color: false,
    condiciones: false,
  });

  // type Fields = "nombre" | "color" | "condiciones"

  // const handleBlur = (field:Fields) =>{

  // }
  // hacer dinámicos los tipos según el use State, typeof agarra si es false o true en este caso y keyof toma los nombres del objeto, nombre, color etc.
  const handleBlur = (field: keyof typeof salidaInput) => {
    setSalidaInput((datos) => ({
      ...datos,
      [field]: true,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSalidaInput ({
      nombre: true,
      color: true,
      condiciones: true,
    })

    if(nombre.length >= 3 && color !=="" && condiciones){
      console.log("Información enviada con éxito")
    }
  };
  return (
    <div className="container mx-auto mt-3">
      <h1>Formulario controlado de clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* input que debe tener mímino 3 caracteres */}
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            className={`form-control ${
              salidaInput.nombre && (nombre.length >= 3 ? "is-valid" : "is-invalid")
            }`}
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={()=>handleBlur("nombre")}
          />
          <div className="invalid-feedback">
            Por favor ingrese su nombre completo, no menos de 3 caracteres.
          </div>
        </div>
        <div className="mb-3">
          <select
            defaultValue=""
            className={`form-control ${
              salidaInput.color && (color !== "" ? "is-valid" : "is-invalid")
            }`}
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={()=>handleBlur("color")}
          >
            <option value="" disabled>
              Seleccione un color
            </option>
            <option value="rojo">Rojo</option>
            <option value="azul">Azul</option>
            <option value="verde">Verde</option>
          </select>
          <div className="invalid-feedback">Por favor elija un color.</div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${salidaInput.condiciones && (condiciones ? "is-valid" : "is-invalid")}`}
            checked={condiciones}
            required
            onChange={(e) => setCondiciones(e.target.checked)}
            onBlur={()=>handleBlur("condiciones")}
          />
          <span className="form-check-label">Aceptar las condiciones</span>
          <div className="invalid-feedback">
            Por favor acepte las condiciones.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default App;
