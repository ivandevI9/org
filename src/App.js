import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

import Formulario from "./componentes/formulario/formulario.js";
import MiOrg from "./componentes/miOrg/index.js";
import Equipo from "./componentes/equipo/index.js";
import Footer from "./componentes/footer/index.jsx";
import Header from "./componentes/header/index.jsx";

function App() {
  // Estado para mostrar u ocultar el formulario
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  // Estado inicial para la lista de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true,
    },
  ]);
  // Estado inicial para la lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "",
      colorSecundario: "",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  // Función para alternar la visibilidad del formulario
  const cambiarMostrar = () => {
    // La función 'cambiarMostrar' invoca 'actualizarMostrar' para cambiar el estado de 'mostrarFormulario'
    // Se invierte el valor actual de 'mostrarFormulario' para mostrar u ocultar el formulario
    actualizarMostrar(!mostrarFormulario);
  };

  // Función para registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    // Imprime en la consola los datos del nuevo colaborador
    console.log("Nuevo colaborador", colaborador);
    // Actualiza el estado 'colaboradores' agregando el nuevo colaborador
    // Se usa la función 'actualizarColaboradores' para modificar el estado, añadiendo al nuevo colaborador al array
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Función para eliminar un colaborador por ID
  const eliminarColaborador = (id) => {
    // Imprime en la consola el ID del colaborador que se va a eliminar
    console.log("Eliminar colaborador", id);
    // Filtra el array de colaboradores eliminando el colaborador que tenga el mismo ID
    // 'nuevosColaboradores' contendrá todos los colaboradores excepto el que coincida con el ID recibido
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    // Actualiza el estado de 'colaboradores' con el array filtrado
    actualizarColaboradores(nuevosColaboradores);
  };

  // Función para actualizar el color de un equipo
  const actualizarColor = (color, id) => {
    // Imprime en la consola el color y el ID del equipo a actualizar
    console.log("actualizar: ", color, id);
    // Se mapea el array de equipos para encontrar el equipo cuyo ID coincida
    // Una vez encontrado el equipo, se actualiza su colorPrimario con el nuevo color proporcionado
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color; // Cambia el color del equipo
      }
      return equipo; // Devuelve el equipo actualizado (o sin cambios)
    });
    // Actualiza el estado de los equipos con el array actualizado
    actualizarEquipos(equiposActualizados);
  };

  // Función para crear un nuevo equipo
  const crearEquipo = (nuevoEquipo) => {
    // Imprime en la consola los datos del nuevo equipo a crear
    console.log(nuevoEquipo);
    // Crea un nuevo equipo con los datos recibidos y un ID único generado por la función 'uuid'
    // Se actualiza el estado de 'equipos' agregando el nuevo equipo al array
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  // Función para marcar o desmarcar un colaborador como favorito
  const like = (id) => {
    // Imprime en la consola cuando se llama a la función 'like'
    console.log("like");
    // Se mapea el array de colaboradores para encontrar el colaborador con el ID proporcionado
    // Si el colaborador es encontrado, se invierte el valor de su propiedad 'fav' (de true a false, o viceversa)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav; // Cambia el estado de 'fav'
      }
      return colaborador; // Devuelve el colaborador actualizado
    });
    // Actualiza el estado de 'colaboradores' con el array actualizado
    actualizarColaboradores(colaboradoresActualizados);
  };

  // Renderizado de los componentes
  return (
    <div>
      {/* Componente Header, se muestra al principio */}
      <Header />

      {/* Mostrar el formulario solo si mostrarFormulario es true */}
      {mostrarFormulario && (
        // Componente Formulario que se renderiza solo si 'mostrarFormulario' es verdadero
        <Formulario
          // Pasa la lista de títulos de equipos como prop 'equipos' al formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          // Pasa las funciones 'registrarColaborador' y 'crearEquipo' como props
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      {/* Componente MiOrg que controla la visibilidad del formulario */}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* Itera sobre el array 'equipos' para renderizar un componente Equipo por cada equipo */}
      {equipos.map((equipo) => (
        <Equipo
          // Pasa los datos del equipo como prop 'datos'
          datos={equipo}
          // La clave 'key' debe ser única y aquí se usa 'equipo.titulo'
          key={equipo.titulo}
          // Filtra los colaboradores que pertenecen a este equipo específico
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          // Pasa las funciones para eliminar colaborador, actualizar color y like
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      {/* Componente Footer, se muestra al final */}
      <Footer />
    </div>
  );
}

export default App;
