import React, { useState } from 'react';
import EducationData from './EducationData';
import "./Education.css";

function Education() {
    const [educationType, setEducationType] = useState(true); // true - school, false - college

    function handleChange(event) {
        const { name } = event.target;
        if (name === 'school') {
            setEducationType(true);
        } else {
            setEducationType(false);
        }
    }

    return (
        <section id='education'>
            <h1 className='education-title'>Education</h1>
            <div className='education-container'>
                <div className='education-switch display-pic-bg'>
                    <button
                        name='school'
                        onClick={handleChange}
                        className={educationType ? 'active display-pic-bg' : 'display-pic-bg'}
                        id='education-button-1'
                    >
                        School
                    </button>
                    <button
                        name='college'
                        onClick={handleChange}
                        className={!educationType ? 'active display-pic-bg' : 'display-pic-bg'}
                        id='education-button-2'
                    >
                        College
                    </button>
                </div>
                <div className='education-list-container'>
                    <div className='school' style={{ display: educationType ? "block" : "none" }}>
                        <EducationData name="Delhi Private School, Dubai" to="2009" from="2022" data="Lorem Ipsum DPS" />
                        <EducationData name="GEMS Legacy School, Dubai" to="2008" from="2009" data="Lorem Ipsum KGS" />
                    </div>
                    <div className='college' style={{ display: !educationType ? "block" : "none" }}>
                        <EducationData name="Vellore Institute of Technology, Chennai" to="2022" from="2026" data="Lorem Ipsum VIT" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
