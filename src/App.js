import './App.css';
import NewStudent from './components/new_student/NewStudent';
import RegisteredStudentList from './components/registered_students/RegisteredStudentList';

const DUMMY_REGISTERED_STUDENTS = [
  {
    id: 1,
    studentName: "Tom Sawyer",
    course: "fullstack"
  },
  {
    id: 2,
    studentName: "Lara Croft",
    course: "qa"
  },
  {
    id: 3,
    studentName: "Jim Harper",
    course: "cyber"
  },
  {
    id: 4,
    studentName: "Harry Potter",
    course: "fullstack"
  },
  {
    id: 5,
    studentName: "Chun Li",
    course: "product"
  }

];

const AVAILABLE_COURSES = {
  fullstack:{
    id:1,
    name: "fullstack",
    displayName: "Fullstack Course",
    startDate: new Date(2023,7,14)
  },
  qa:{
    id:2,
    name: "qa",
    displayName: "QA Course",
    startDate: new Date(2023,2,20)
  },
  cyber:{
    id:3,
    name: "cyber",
    displayName: "Cyber Course",
    startDate: new Date(2023,4,5)
  },
  product:{
    id:4,
    name: "product",
    displayName: "Product Management Course",
    startDate: new Date(2023,6,30)
  },
}

function App(){
  
  const addNewStudentHandler = (student) =>{
    //DUMMY_REGISTERED_STUDENTS.push(student);
    console.log(JSON.stringify(student));
  }

  return (
    <div>
      <NewStudent addStudent={addNewStudentHandler}/>
      <RegisteredStudentList registeredStudents={DUMMY_REGISTERED_STUDENTS} course={AVAILABLE_COURSES["fullstack"]}/>
    </div>
    
  );
}

export default App;
