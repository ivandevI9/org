
import "./Campo.css";

const Campo = (props) => {
    // Modifica el texto del placeholder agregando '...' al final
    const placeholderModificado = `${props.placeholder}...`;

    // Desestructuración para obtener el tipo del campo, por defecto es 'text'
    const { type = 'text' } = props;

    // Función que maneja los cambios en el campo de entrada
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    return (
        <div className={`campo campo-${type}`}>
            {/* Etiqueta del campo */}
            <label>{props.titulo}</label>
            <input
                // Placeholder modificado para el campo de entrada
                placeholder={placeholderModificado}
                // Campo requerido si se indica en las props
                required={props.required}
                // Valor del campo de entrada
                value={props.valor}
                // Maneja el cambio en el campo de entrada
                onChange={manejarCambio}
                // Tipo del campo de entrada (por defecto es 'text')
                type={type}
            />
        </div>
    );
};

export default Campo;