import React from 'react';  
import './Footer.css'; // Importar el CSS del Footer  

const Footer = () => {  
    return (  
        <footer className="footer">  
            <div className="contact-info">  
                <div className="left-column">  
                    <div className="social-icons">  
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">  
                            <img src="/icons/fb.png" alt="Facebook" />  
                        </a>  
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">  
                            <img src="/icons/tw.png" alt="Twitter" />  
                        </a>  
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">  
                            <img src="/icons/instagram.png" alt="Instagram" />  
                        </a>  
                    </div>  
                    <div className="email">  
                        <a href="mailto:centro.serviciosocial@uca.edu.sv">centro.serviciosocial@uca.edu.sv</a>  
                    </div>  
                    <div className="phone">  
                        <img src="/icons/telefono.png" alt="Teléfono" />  
                        <span>2210-6600 Ext. 427 y 2210-6680.</span>  
                    </div>  
                </div>  
                <div className="right-column">  
                    <p>Universidad Centroamericana José Simeón Cañas</p>  
                    <p>Bulevar Los Próceres, Antiguo Cuscatlán, La Libertad, El Salvador, Centroamérica.</p>  
                </div>  
            </div>  
        </footer>  
    );  
};  

export default Footer;