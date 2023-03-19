import React from "react";
import CourseDate from "./CourseDate";
import './RegisteredStudent.css';

function RegisteredStudent(props){

    const {student, course} = props;

    return(
        <div className="registration-student card">
            <CourseDate date={course.startDate}/>
            <div className="registration-student__description">
                <h2>{student.studentName}</h2>
                <p className="registration-student__course">{student.course}</p>
            </div>
        </div>
    );
};

export default RegisteredStudent;