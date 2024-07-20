import "./listaOpciones.css"
// Definición del componente funcional ListaOpciones, que recibe props como argumento
const ListaOpciones = (props) => {

    // Función para manejar el cambio de selección en el <select>
    const manejarCambio = (e) => {
        // Llama a la función actualizarEquipo pasada a través de props con el nuevo valor seleccionado
        props.actualizarEquipo(e.target.value);
    }

    // Renderizado del componente
    return (
        <div className="lista-opciones">
            {/* Etiqueta del <select> */}
            <label>Equipos </label>
            {/* Dropdown <select> controlado */}
            <select value={props.valor} onChange={manejarCambio}>
                {/* Opción por defecto oculta y deshabilitada */}
                <option value="" disabled defaultValue='' hidden>
                    Seleccionar equipo
                </option>
                {/* Mapeo de los equipos pasados a través de props para crear las opciones del <select> */}
                {props.equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
            </select>
        </div>
    );
}

// Exportación del componente para ser usado en otros archivos
export default ListaOpciones;