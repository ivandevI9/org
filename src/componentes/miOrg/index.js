
import { useState } from "react";
import "./miOrg.css";
import addImage from './img/add.png';

const MiOrg = (props) => {

    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }
    return (
        <section className="orgSection">
            <section className="contenedor">
                <div className="item-1"></div>
                <div className="item-2">
                    <h3 className="title">Mi organización</h3>
                </div>
                <div className="item-3">
                    <div className="container__img">
                        <img className="title__img" src={addImage} alt="add" onClick={props.cambiarMostrar} />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default MiOrg;

