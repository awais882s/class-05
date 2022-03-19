import { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
function Students() {
    const [students, setStudents] = useState(data)
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [rollno, setRollNo] = useState("");
    const [stuClass, setStuClass] = useState("");

    // const inputHandler = (e) => {
    //     console.log("e", e.target.Name);
    //     console.log("E", e.target.value);

    // }
    const inputHandlerName = (e) => {
        setName(e.target.value);
    }
    const inputHandlerBatch = (e) => {
        setBatch(e.target.value);
    }
    const inputHandlerRoll = (e) => {
        setRollNo(e.target.value);
    }

    const inputHandlerClass = (e) => {
        setStuClass(e.target.value);
    }
    const onClickHandlerSubmit = () => {
        let student = {
            name,
            batch,
            rollno,
            class: stuClass,

        }
        console.log("New Students Data", student);
        setStudents([...students, student]);

        // new data add in student list
    }
    return (
        <div>
            <h1>New Students Add</h1>
            <h4>New Student Name is:{name}</h4>
            <input type="text" placeholder="Name" onChange={inputHandlerName} />
            <h4>New Student Batch Number is:{batch}</h4>
            <input type="text" placeholder="Batch Number" onChange={inputHandlerBatch} />
            <h4>New Student Roll Number is:{rollno}</h4>
            <input type="number" placeholder="Roll No" onChange={inputHandlerRoll} />
            <h4>New Student Class is:{stuClass}</h4>
            <input type="text" placeholder="Class" onChange={inputHandlerClass} />&nbsp;
            <button onClick={onClickHandlerSubmit}>Submit Data</button>
            <hr />
            <h1>List of Students</h1>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>
            </table>
            {
                students.map((item, index) => {
                    return <StudentList index={index} student={item} />
                })
            }
        </div>
    )
};
export default Students;