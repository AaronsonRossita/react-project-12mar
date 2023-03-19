import React,{useState} from "react";
import './StudentForm.css'


function StudentForm(props){
    const [enteredStudentName, setEnteredStudentName] = useState("");

    const nameChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredStudentName(event.target.value);
    }

    const [enteredCourse, setEnteredCourse] = useState("");

    const courseChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredCourse(event.target.value);
    }

    const [enteredCourseDate, setEnteredCourseDate] = useState("");

    const courseDateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredCourseDate(event.target.value);
    }

    const submitHandler = (event) => {
        const student = {
            id : 4,
            name : enteredStudentName,
            courseName : enteredCourse
        }

        props.addStudent(student);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-registration__controls">
                <div className="new-registration__control">
                    <label>Student name</label>
                    <input type="text" onChange={nameChangeHandler} value={enteredStudentName} required/>
                </div>
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" onChange={courseChangeHandler} value={enteredCourse}>
                        <option disabled> Choose your course </option>
                        <option value="fullstack">Fullstack Course</option>
                        <option value="qa">QA Course</option>
                        <option value="cyber">Cyber Course</option>
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Date</label>
                    <input type="date" onChange={courseDateChangeHandler} value={enteredCourseDate}></input>
                </div>
            </div>
            <br/>
            <div className='new-registration__actions'>
                <button type='button'>Cancel</button>
                <button type='submit'>Register Student</button>
            </div>
        </form>
    )
};

export default StudentForm;