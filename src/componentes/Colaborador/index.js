import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos

    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <IoIosCloseCircle
            className="eliminar"
            onClick={() => eliminarColaborador(id)}
        />

        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" onClick={()=> like(id)}/> : <CiHeart onClick={()=> like(id)} />}

        </div>
    </div>
}

export default Colaborador