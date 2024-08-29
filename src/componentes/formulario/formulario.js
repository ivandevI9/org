// Importación de useState desde React y de los archivos CSS y componentes necesarios
import { useState } from "react";
import "./formulario.css";
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";

// Definición del componente funcional Formulario
const Formulario = (props) => {
    // Estados locales para gestionar los valores de los campos del formulario
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    // Extracción de las funciones registrarColaborador y crearEquipo de las props
    const { registrarColaborador, crearEquipo } = props;

    // Función para manejar el envío del formulario de colaborador
    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };
        registrarColaborador(datosAEnviar);
    };

    // Función para manejar el envío del formulario de equipo
    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo: titulo, colorPrimario: color });
    };

    // Renderizado del componente
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                {/* Componente Campo para el nombre */}
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresa nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                {/* Componente Campo para el puesto */}
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresa puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                {/* Componente Campo para la foto */}
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                {/* Componente ListaOpciones para seleccionar equipo */}
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                {/* Botón para enviar el formulario */}
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                {/* Componente Campo para el título del equipo */}
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                {/* Componente Campo para el color del equipo */}
                <Campo
                    titulo="Color"
                    placeholder="Ingresa color en Hex"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                {/* Botón para enviar el formulario */}
                <Boton>Registrar equipo</Boton>
            </form>
        </section>
    );
};

// Exportación del componente para ser usado en otros archivos
export default Formulario;
