import React from 'react';  
import './Header.css'; // Importar el archivo CSS  

const Header = () => {  
    return (  
        <header className="header">  
            <div className="header-content">  
                <div className="logo">  
                    <img src="/icons/logo.png" alt="logo" />  
                </div>  
                <div className="title">Centro de Servicio Social</div>  
                <div className="profile-icon">  
                    <img src="/icons/usuario.png" alt="Perfil" />  
                </div>  
            </div>  
            <nav className="nav">  
                <ul>  
                    <li><a href="/">Inicio</a></li>  
                    <li><a href="/css">CSS</a></li>  
                    <li><a href="/contact">Contacto</a></li>  
                    <li><a href="/servicio-social">Servicio social</a></li>  
                    <li><a href="/documentos">Documentos</a></li>  
                    <li><a href="/circulos-de-estudio">Círculos de estudio</a></li>  
                    <li><a href="/sugerencias">Sugerencias</a></li>  
                </ul>  
            </nav>  
        </header>  
    );  
};  

export default Header;