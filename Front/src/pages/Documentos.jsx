import React from 'react';  
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import './Documentos.css';  

const Documentos = () => {  
    return (  
        <div>  
            <Header />   
            <div className="documentos-container">  
                <h1>Documentos</h1>  
                <div className="documentos-items">  
                    <div className="document-item">  
                        <img src="/icons/estudiante.png" alt="Plan de trabajo del estudiante" />  
                        <p>Plan de trabajo del estudiante</p>  
                    </div>  
                    <div className="document-item">  
                        <img src="/icons/guia.png" alt="Guía de informe final" />  
                        <p>Guía de informe final</p>  
                    </div>  
                    <div className="document-item">  
                        <img src="/icons/calendario.png" alt="Control de asistencia" />  
                        <p>Control de asistencia</p>  
                    </div>  
                </div>  
            </div> 
            <Footer />   
        </div>  
        
    );  
};  

export default Documentos;