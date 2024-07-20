// Importación del archivo CSS para los estilos del componente
import "./Equipo.css"
// Importación del componente Colaborador
import Colaborador from "../Colaborador"
// Importación de la función para convertir color HEX a RGBA
import hexToRgba from 'hex-to-rgba';

// Definición del componente funcional Equipo
const Equipo = (props) => {

    // Desestructuración de las propiedades recibidas
    const { colorPrimario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    // Estilo para el fondo del equipo con color primario en formato RGBA
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    // Estilo para el título con borde del color primario
    const estiloTitulo = { borderColor: colorPrimario }

    return (
        <>
            {
                // Renderiza el equipo solo si hay colaboradores
                colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    {/* Input para cambiar el color primario del equipo */}
                    <input 
                        type="color"
                        className="input-color"
                        value={colorPrimario}
                        onChange={(evento => {
                            // Actualiza el color primario del equipo al cambiar el valor del input
                            actualizarColor(evento.target.value, id);
                        })}
                    />

                    {/* Título del equipo con estilo aplicado */}
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            // Mapea y renderiza cada colaborador dentro del equipo
                            colaboradores.map((colaborador, index) => <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            />)
                        }
                    </div>
                </section>
            }
        </>
    )
}

// Exportación del componente para ser usado en otros archivos
export default Equipo;