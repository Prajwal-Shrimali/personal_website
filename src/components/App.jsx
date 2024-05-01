import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Education from "./education/Education";
import UnderDevelopment from "./UnderDeleopment";

import "./App.css";


function App() {
    return (
        <div>
            <UnderDevelopment />
            <Navbar />
            <Home />
            <About />
            <Education />
        </div>
    );
}

export default App