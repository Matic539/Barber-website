import React from 'react'
import Navbar from '../Components/common/navbar'
import MobileMenu from '../Components/common/menu'
import LogoBarber from '../assets/img/logo.webp'
import About from '../Components/layouts/About'
import Services from '../Components/layouts/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../assets/styles/pages/home.css'

function HomePage() {
    return (
        <div>
            <header>
                <Navbar />
                <MobileMenu />
            </header>
            <main className='main-home' id='home'>
                <section className='welcome-container'>
                    <div className='welcome-section'>
                        <h1>Pbarber | Barbería</h1>
                        <p>Buscamos fortalecer tu imagen, perfeccionando tu barba y tu peinado. Descubre nuestros servicios y ofertas especiales</p>
                        <div className="welcome-buttons">
                            <button href='#'>
                                Agenda una cita
                            </button>
                            <div className="social-buttons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-button">
                                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-button">
                                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-button">
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='logo'>
                        <img src={LogoBarber} alt="Logo de la barbería" className='logo-img'/>
                    </div>
                </section>
                <section className='about' id='about'>
                    <About />
                </section>
                <section className='service' id='service'>
                    <Services />
                </section>
                {/* <h1>HomePage</h1> */}
            </main>
        </div>
    )
}

export default HomePage