import React,{useState} from "react";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";
import "./Registration.css";

function Registration(props){

    const [filteredCourse, setFilteredCourse] = useState("fullstack");

    const onChangeFilterHandler = (course) => {
        setFilteredCourse(course);
    }

    return(
        <div className="registrations card">
            <RegisteredStudentFilter filterHandler={onChangeFilterHandler}/>
            <RegisteredStudentList registeredStudents={props.registeredStudents} course={props.course}/>
        </div>
    )
}

export default Registration;