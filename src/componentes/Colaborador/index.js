// Importación del archivo CSS para los estilos del componente
import "./Colaborador.css"
// Importación de iconos necesarios para eliminar y marcar como favorito
import { IoIosCloseCircle } from "react-icons/io"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

// Definición del componente funcional Colaborador
const Colaborador = (props) => {
    // Desestructuración de las propiedades recibidas
    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return (
        <div className="colaborador">
            {/* Icono para eliminar el colaborador, llama a eliminarColaborador al hacer clic */}
            <IoIosCloseCircle
                className="eliminar"
                onClick={() => eliminarColaborador(id)}
            />

            {/* Encabezado con fondo del color primario, contiene la foto del colaborador */}
            <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <img src={foto} alt={nombre}></img>
            </div>

            {/* Información del colaborador: nombre, puesto y estado de favorito */}
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {/* Icono de corazón que cambia de color según si el colaborador es favorito */}
                {fav ? <FaHeart color="red" onClick={() => like(id)} /> : <CiHeart onClick={() => like(id)} />}
            </div>
        </div>
    );
}

// Exportación del componente para ser usado en otros archivos
export default Colaborador;