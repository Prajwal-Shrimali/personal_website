import React from "react";

function EducationData (props) {
    return(
        <div className="education-data-container">
            <h2>{props.name}</h2>
            <h6>{props.to} - {props.from}</h6>
            <p>{props.data}</p>
        </div>
    )
}

export default EducationData;