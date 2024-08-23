import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fatherName, setFatherName] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!name && !rollNo && !fatherName) {
      return;
      alert("Please fill these input fields");
    }

    const newStudent = { name, rollNo, fatherName };
    setStudents([...students, newStudent]);

    setName("");
    setFatherName("");
    setRollNo("");
  };

  return (
    <>
      <div>
        <input
          style={{ margin: "5px", padding: "8px", borderRadius: "10px" }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ margin: "5px", padding: "8px", borderRadius: "10px" }}
          placeholder="Father name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        <input
          style={{ margin: "5px", padding: "8px", borderRadius: "10px" }}
          placeholder="Roll number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button onClick={addStudent}>Add</button>
        <table>
          <thead>
            <tr>
              <th style={{ padding: "8px" }}>Name</th>
              <th style={{ padding: "8px" }}>Father Name</th>
              <th style={{ padding: "8px" }}>Roll Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, ind) => (
              <tr key={ind}>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.rollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
