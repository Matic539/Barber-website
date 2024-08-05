import React, { useState, useEffect } from "react";
import '../../assets/styles/components/common/menu.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mobile-menu">
            <button className={`menu-toggle ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                <div className="bar over"></div>
                <div className="bar mid"></div>
                <div className="bar under"></div>
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;