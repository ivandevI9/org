import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg/index.js';
import Equipo from './componentes/equipo/index.js';
import Footer from './componentes/footer/index.jsx';
import Header from './componentes/header/index.jsx';


function App() {
  // Estado para mostrar u ocultar el formulario
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  // Estado inicial para la lista de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ])
  // Estado inicial para la lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "",
      colorSecundario: ''
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: '#FFEEDF'
    }

  ])

  // Función para alternar la visibilidad del formulario
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Función para registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Función para eliminar un colaborador por ID
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  // Función para actualizar el color de un equipo
  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  // Función para crear un nuevo equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  // Función para marcar o desmarcar un colaborador como favorito
  const like = (id) => {
    console.log('like');
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  };

  // Renderizado de los componentes
  return (
    <div>
      <Header/>
      {/* Mostrar el formulario solo si mostrarFormulario es true */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;