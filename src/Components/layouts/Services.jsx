import React from 'react'
import '../../assets/styles/layout/services.css'



function Services() {
    return (
        <div className="services-container">
            <h2>Nuestros Servicios</h2>
            <div className="service-list">
                <div className="service-item">
                    <img src="../../img/haircut.jpg" alt="Corte de Cabello" />
                    <h3>Corte de Cabello</h3>
                    <p>Descripción del servicio de corte de cabello.</p>
                </div>
                <div className="service-item">
                    <img src="../../img/shave.jpg" alt="Afeitado" />
                    <h3>Afeitado Clásico</h3>
                    <p>Descripción del servicio de afeitado clásico.</p>
                </div>
                <div className="service-item">
                    <img src="../../img/beard-care.jpg" alt="Cuidado de Barba" />
                    <h3>Cuidado de Barba</h3>
                    <p>Descripción del servicio de cuidado de barba.</p>
                </div>
                <div className="service-item">
                    <img src="../../img/hair-color.jpg" alt="Coloración" />
                    <h3>Coloración de Cabello</h3>
                    <p>Descripción del servicio de coloración de cabello.</p>
                </div>
            </div>
        </div>
    )
}

export default Services