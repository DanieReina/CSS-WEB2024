import React from 'react';  
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import useCarousel from '../hooks/useCarousel'; // Importar el hook  
import './Home.css';  

const Home = () => {  
    const images = [  
        '/images/inicio1.jpg',  
        '/images/inicio3.jpg',  
        '/images/inicio4.jpg',  
        '/images/inicio5.jpg'  
    ];  
    
    const { currentIndex, handleNext, handlePrev } = useCarousel(0, images); // Usar el hook  

    return (  
        <div>  
            <Header />  
            <div className="hero">  
                <button className="carousel-button" onClick={handlePrev}>❮</button>  
                <img src={images[currentIndex]} alt="Carrusel" />  
                <button className="carousel-button" onClick={handleNext}>❯</button>  
            </div>  
            <div className="services">  
                <div className="service-item">  
                    <img src="/icons/opcss.png" alt="Opciones de servicio social" />  
                    <p>Opciones de servicio social</p>  
                </div>  
                <div className="service-item">  
                    <img src="/icons/VisMis.png" alt="Definición, objetivos, misión y visión" />  
                    <p>Definición, objetivos, Misión y Visión</p>  
                </div>  
                <div className="service-item">  
                    <img src="/icons/comprom.png" alt="Compromisos en el servicio social" />  
                    <p>Compromisos en el servicio social</p>  
                </div>  
            </div>  
            <Footer />  
        </div>  
    );  
};  

export default Home;