import { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
function Students() {
    const [students, setStudents] = useState(data)
    const [Name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [rollno, setRollNo] = useState("")
    const [stdclass, setClass] = useState("")

    return (
        <div>
            <h1>New Students Add</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Batch Number" />
            <input type="number" placeholder="Roll No" />
            <input type="text" placeholder="Class" />&nbsp;
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