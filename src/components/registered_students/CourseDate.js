import React from "react";
import './CourseDate.css';

function CourseDate(props) {
    const day = props.date.getDay();
    const month = props.date.getMonth();
    const year = props.date.getFullYear();
    
    return (
        <div className="registration-date">
            {day}/{month}/{year}
        </div>
    );
}

export default CourseDate;