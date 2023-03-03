import React from "react";
import "./navbar.scss";
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" id="Home">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" id="About">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" id="Resume">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#" id="Services">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" id="Projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" id="Contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#" id="My Blog">
                        My Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

