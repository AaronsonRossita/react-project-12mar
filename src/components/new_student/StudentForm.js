import React,{useState} from "react";
import dateFormatting from "../utils/dateUtils";
import './StudentForm.css'


function StudentForm(props){
    const [enteredStudentName, setEnteredStudentName] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredStudentName(event.target.value);
    }

    const [enteredCourse, setEnteredCourse] = useState("");

    const courseChangeHandler = (event) => {
        let chosenCourse = event.target.value;
        setEnteredCourse(chosenCourse);
        setEnteredCourseDate(dateFormatting(props.courses[chosenCourse].startDate));
    }

    const [enteredCourseDate, setEnteredCourseDate] = useState("");


    const submitHandler = (event) => {
        event.preventDefault();

        const student = {
            studentName : enteredStudentName,
            course : enteredCourse
        }

        setEnteredStudentName("");
        setEnteredCourse("");
        setEnteredCourseDate("");

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
                        <option value="product">Product Management Course</option>
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Date</label>
                    <input type="date" disabled value={enteredCourseDate}></input>
                </div>
            </div>
            <br/>
            <div className='new-registration__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Register Student</button>
            </div>
        </form>
    )
};

export default StudentForm;