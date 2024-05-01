import React from "react";
import "./Navbar.css";
import Image from "./../../asset/myImage-removebg.png";

function Navbar() {
    return (
        <div className={"navbarContainer"}>
            <nav>
                <div className="logoContainer">
                    <img src={Image} alt="Prajwal Shrimali" className="circularImage"/>
                    <h1>Prajwal Shrimali</h1>
                </div>
                <ul className="navbar">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about-me" className="nav-link">About</a></li>
                    <li><a href="#education" className="nav-link">Education</a></li>
                    {/* <li><a href="#experience" className="nav-link">Experience</a></li> */}
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
