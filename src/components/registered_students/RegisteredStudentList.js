import React from "react";
import "./RegisteredStudentList.css";
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList (props){

    const {registeredStudents, course} = props;

    if(registeredStudents.length === 0){
        return <h2 className="registrations-list__fallback">No students registered</h2>
    }

    return(
        <ul className="registrations-list">
            {registeredStudents.map( (student) => {
                return <RegisteredStudent student={student} course={course}/>
            })}
        </ul>
    )
}

export default RegisteredStudentList;