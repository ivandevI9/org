import "./Header.css"

// Definición del componente funcional Header
const Header = () => {
    return (
        <>
            <header className="header">
                {/* Imagen del encabezado con la fuente de la imagen y texto alternativo */}
                <img src="/img/header.png" alt='Org' />
            </header>
        </>

    );
}

// Exportación del componente para ser usado en otros archivos
export default Header;