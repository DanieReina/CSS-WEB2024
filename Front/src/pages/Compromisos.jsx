import React from 'react';  
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import './Compromisos.css';  

const Compromisos = () => {  
    return (  
        <div>  
            <Header />  
            <div className="compromisos-container">  
                <h1>Compromisos en el servicio social</h1>  
                <p>  
                    Dentro de los compromisos asumidos por el estudiante al iniciar el servicio social estudiantil se encuentra la elaboración de un Plan de trabajo. El responsable institucional asignado para dar seguimiento a las actividades del alumno se compromete a apoyar con esta tarea. Además de brindar la inducción necesaria para la buena ejecución de la misma. Cualquier cambio en el plan de trabajo como la prolongación, suspensión temporal o anticipada por una de las partes, un cambio del contenido o requerimiento de estudiantes deben ser informados inmediatamente al Centro de Servicio Social.  
                </p>  
                <p>  
                    La institución/contraparte proporciona además todo lo necesario para el trabajo: recursos materiales, asesoría o acompañamiento continuo, y equipo. Si la acción social se realiza fuera de San Salvador le reconocerá transporte y alimentación. De ser necesario el alojamiento, según el caso lo amerite.  
                </p>  
                <p>  
                    Finalizado el Servicio Social, la institución tiene la obligación de extender una “Carta de finalización” dirigida al Centro de Servicio Social donde haga constar la cantidad de horas reales trabajadas que han sido registradas en el “Control de Asistencia por alumno “así como la valoración de su desempeño.  
                </p>  
                <p>  
                    Posteriormente sobre la base de horas sociales, el informe final preparado por el alumno y la información recabada en el seguimiento estudiantil se procede a la asignación de las horas sociales.  
                </p>  
            </div>  
            <Footer />  
        </div>  
    );  
};  

export default Compromisos;