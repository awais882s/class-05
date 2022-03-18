// 1st method
function StudentList({ student, index }) {
  return (
    <div>
      <table>
        <tr>
          <td>{index}</td>
          <td>{student.name}</td>
          <td>{student.batch}</td>
          <td>{student.rollno}</td>
          <td>{student.class}</td>
        </tr>
      </table>
    </div>
  );
}
export default StudentList;

// 2nd method

// function StudentList(props) {
//   return (
//     <div>
//       <tr>
//         <td>{props.student.name}</td>
//         <td>{props.student.batch}</td>
//         <td>{props.student.rollno}</td>
//         <td>{props.student.class}</td>
//       </tr>
//     </div>
//   );
// }
// export default StudentList;
