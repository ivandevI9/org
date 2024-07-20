// Importa el archivo de estilos CSS para el componente Boton
import "./boton.css";

// Define el componente Boton
const Boton = (props) => {
    // Renderiza un botón con la clase CSS 'boton' y el contenido pasado como hijos
    return <button className="boton">{props.children}</button>
}

// Exporta el componente Boton para que pueda ser utilizado en otros archivos
export default Boton;