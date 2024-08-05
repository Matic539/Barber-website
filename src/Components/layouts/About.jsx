import React from 'react'
import '../../assets/styles/layout/about.css'

function About() {
    return (
        <div>
            <section className="about-container">
                <div className="about-content">
                    <h2>Sobre Nosotros</h2>
                    <p>
                        En Pbarber, nos apasiona ofrecer los mejores cortes y estilos clásicos y modernos.
                        Nuestro equipo de barberos profesionales está comprometido con la excelencia y la satisfacción
                        del cliente.
                    </p>
                    <p>
                        Ubicados en el corazón de la ciudad, nuestra barbería combina tradición con innovación para
                        brindarte una experiencia única. Ven y relájate mientras transformamos tu look.
                    </p>
                </div>
                <div className="about-image nosotros"></div>
            </section>
        </div>
    )
}

export default About