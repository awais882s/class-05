import { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
function Students() {
    const [students, setStudents] = useState(data)
    const [Name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [roll, setRollNo] = useState("");
    const [stdClass, setStdClass] = useState("");

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
        setStdClass(e.target.value);
    }
    return (
        <div>
            <h1>New Students Add</h1>
            <h4>New Student Name is:{Name}</h4>
            <input type="text" placeholder="Name" onChange={inputHandlerName} />
            <h4>New Student Batch Number is:{batch}</h4>
            <input type="text" placeholder="Batch Number" onChange={inputHandlerBatch} />
            <h4>New Student Roll Number is:{roll}</h4>
            <input type="number" placeholder="Roll No" onChange={inputHandlerRoll} />
            <h4>New Student Class is:{stdClass}</h4>
            <input type="text" placeholder="Class" onChange={inputHandlerClass} />&nbsp;
            <button>Submit Data</button>
            <hr />
            <h1>List of Students</h1>
            <table>
                <tr>
                    <th>Index</th>
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