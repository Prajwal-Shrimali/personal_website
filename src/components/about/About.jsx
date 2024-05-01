import React from "react";
import "./About.css";
import Image from "./../../asset/hata-photo.jpg"
import Python from "./../../asset/python.png"
import MySQL from "./../../asset/mysql.png"
import GitHub from "./../../asset/github-sign.png"

function About() {
    return (
        <section id="about">
            <h1 className="about-me" id="about-me">About Me</h1>
            <div className="about-me-container display-pic-bg">
                <div className="about-me-text-container">
                    <p className="about-me-text">
                        &nbsp; Hey there, I'm Prajwal Shrimali, a sophomore student who's passionate about learning and pushing 
                        the boundaries of what I can achieve. When it comes to studies, I don't just do well—I excel. 
                        Python and C++ are my bread and butter, but what really gets me excited is diving into new technologies. 
                        From the latest frameworks to cutting-edge developments, I'm always eager to expand my skill set 
                        and stay ahead of the curve.
                    </p>
                    <p className="about-me-text">
                        &nbsp; But it's not just about personal growth for me. I firmly believe in the power of collaboration. 
                        I'm ready to team up with like-minded individuals to tackle challenges head-on and create something 
                        truly extraordinary. Whether it's brainstorming innovative solutions or diving into complex projects, 
                        I bring enthusiasm, creativity, and a relentless drive for excellence to the table. Let's make magic 
                        happen together!
                    </p>
                </div>
                <div className="about-me-image">
                    <img src={Image} alt="About Me" className="about-image" />
                </div>
            </div>
            <div className="skills">
                <h1>Familiar With</h1>
                <ul className="skills-list">
                    <li><a href="https://www.python.org"><img src={Python} alt="Python"  /></a></li>
                    <li><a href="https://www.iso.org/standard/74528.html"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C"  /></a></li>
                    <li><a href="https://isocpp.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1024px-ISO_C%2B%2B_Logo.svg.png" alt="C++"  /></a></li>
                    <li><a href="https://www.mysql.com/"><img src={MySQL} alt="MySQL"  /></a></li>
                    <li><a href="https://reactjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React"  /></a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png" alt="HTML"  /></a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS"  /></a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"  /></a></li>
                    <li><a href="https://reactnative.dev/"><img src="https://reactnative.dev/img/header_logo.svg" alt="React Native"  /></a></li>
                    <li><a href="https://www.java.com/"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java"  /></a></li>
                    <li><a href="https://nodejs.org/"><img src="https://nodejs.org/static/images/logo.svg" alt="Node.js"  /></a></li>
                    <li><a href="https://www.npmjs.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" alt="npm"  /></a></li>
                    <li><a href="https://expressjs.com/"><img src="https://expressjs.com/images/express-facebook-share.png" alt="Express.js"  /></a></li>
                    <li><a href="https://github.com/"><img src={GitHub} alt="GitHub"  /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default About;