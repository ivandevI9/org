// Importación del archivo CSS para los estilos del componente
import "./Footer.css"

// Definición del componente funcional Footer
const Footer = () => {
    return (
        // Elemento <footer> que actúa como el pie de página del sitio
        <footer className="footer">
            {/* Contenedor para la imagen de fondo en el pie de página */}
            <div className="imgBack">
                {/* Imagen dentro del contenedor, con fuente y texto alternativo */}
                <img src="/img/Footer.png" alt="ImgBack" />
            </div>    
        </footer>
    );
}

// Exportación del componente para ser usado en otros archivos
export default Footer;