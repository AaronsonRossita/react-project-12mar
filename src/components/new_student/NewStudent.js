import React, { useState } from "react";
import './NewStudent.css';
import StudentForm from "./StudentForm";

function NewStudent(props){

    const [isEditing, setIsEditing] = useState(true);

    const saveRegisteredStudentHandler = (studentData) => {
        const registeredStudent = {
            ...studentData,
            id: Math.random()
        }
        props.addStudent(registeredStudent);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }

    const editHandler = () => {
        setIsEditing(true);
    }


    return(
        <div className="new-registration">
            { isEditing ? 
            <StudentForm addStudent={saveRegisteredStudentHandler} courses={props.courses} onCancel={cancelHandler}/> :
            <button onClick={editHandler}>Register Student</button>}
            
        </div>
        
    )
}

export default NewStudent;


