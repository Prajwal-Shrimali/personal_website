import React from "react";
import Typed from 'typed.js';
import Image from "./../../asset/Transparent_profile_pic.png";
import "./Home.css";


function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                        "‏‏‎ ‎Developer.", 
                        "‏‏‎ ‎Student.", 
                        "n Enthusiast.", 
                        "‏‏‎ ‎Professional Coder."
                    ],
            typeSpeed: 20,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home">
            <div id="home-text">
                <h1>Hi, I'm <span id="name">Prajwal Shrimali</span></h1>
                <h2>a<span ref={el} /></h2>
                <br />
                <p className="info-text">
                    I'm a code-cracking, mystery-solving dynamo! As a developer, student, and all-around enthusiast, 
                    I'm on a thrilling quest to unravel the secrets of our digital universe. Join me in this 
                    adrenaline-fueled adventure as we unlock the wonders of technology and embrace the excitement 
                    of discovery!
                </p>
            </div>
            <div id="home-image">
                <div className="lower-div display-pic-bg" />
                <div className="image-div">
                    <img src={Image} alt="Prajwal Shrimali Display Pic" />
                </div>
            </div>
        </section>        
    );
}

export default Home;