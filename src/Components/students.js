import { useState } from "react";
import { data } from "./data";
import StudentList from "./studentList";
function Students() {
    const [students, setStudents] = useState(data)
    return (
        <div>
            <h1>List of Students</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>
            </table>
            {
                students.map((item) => {
                    return <StudentList student={item} />
                })
            }

        </div>
    )
};
export default Students;