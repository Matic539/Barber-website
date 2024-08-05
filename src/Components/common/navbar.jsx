import React, { useState, useEffect } from "react";
import '../../assets/styles/components/common/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
                <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
                <li><a onClick={() => scrollToSection('about')}>Nosotros</a></li>
                <li><a onClick={() => scrollToSection('service')}>Servicios</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
