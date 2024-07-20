
import "./miOrg.css";
import addImage from './img/add.png';

// Definición del componente MiOrg, que recibe props como argumento
const MiOrg = (props) => {
    return (
        // Sección principal del componente con clase "orgSection"
        <section className="orgSection">
            {/* Contenedor interno para organizar los elementos */}
            <section className="contenedor">
                {/* Elemento de diseño vacío */}
                <div className="item-1"></div>
                {/* Elemento que contiene el título de la organización */}
                <div className="item-2">
                    <h3 className="title">Mi organización</h3>
                </div>
                {/* Elemento que contiene la imagen de agregar */}
                <div className="item-3">
                    <div className="container__img">
                        {/* Imagen que al hacer clic ejecuta la función cambiarMostrar pasada a través de props */}
                        <img className="title__img" src={addImage} alt="add" onClick={props.cambiarMostrar} />
                    </div>
                </div>
            </section>
        </section>
    );
}

// Exportación del componente para ser usado en otros archivos
export default MiOrg;