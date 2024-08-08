import React from 'react'
import CortePhoto from '../../assets/img/corte.webp'
import Afeitado from '../../assets/img/barbacorte.webp'
import CuidadoBarba from '../../assets/img/cuidadobarba.webp'
import Coloracion from '../../assets/img/colorpelo.webp'
import '../../assets/styles/layout/services.css'


function Services() {
    return (
        <div className="services-container">
            <h2>Nuestros Servicios</h2>
            <div className="service-list">
                <div className="service-item">
                    <img src={CortePhoto} alt="Corte de Cabello" />
                    <h3>Corte de Cabello</h3>
                    <p>Descripción del servicio de corte de cabello.</p>
                </div>
                <div className="service-item">
                    <img src={Afeitado} alt="Afeitado" />
                    <h3>Afeitado Clásico</h3>
                    <p>Descripción del servicio de afeitado clásico.</p>
                </div>
                <div className="service-item">
                    <img src={CuidadoBarba} alt="Cuidado de Barba" />
                    <h3>Cuidado de Barba</h3>
                    <p>Descripción del servicio de cuidado de barba.</p>
                </div>
                <div className="service-item">
                    <img src={Coloracion} alt="Coloración" />
                    <h3>Coloración de Cabello</h3>
                    <p>Descripción del servicio de coloración de cabello.</p>
                </div>
            </div>
        </div>
    )
}

export default Services