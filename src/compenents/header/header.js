import React, { useEffect, useState, memo } from "react";
import Navbar from "./Navbar";
import './header.scss'; 
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleIsSticky = () =>
            window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener("scroll", handleIsSticky);

        return () => {
            window.removeEventListener("scroll", handleIsSticky);
        };
    }, [isSticky]);
    return (
        <header id="header" className={isSticky ? "sticky" : ""}>
            <div className="container">
                <div className="navbar">
                    <a to="/" className="navbar-brand">
                        <span id="center">R</span><a id="text">onaldo</a>
                    </a>
                    

                    <nav className="nav_actions">
                        <Navbar />
                    </nav>
                </div>
            </div>

        </header>

    );
}

export default Header;