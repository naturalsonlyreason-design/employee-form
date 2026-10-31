
import React, { useState, useEffect } from "react";
import EmployeeForm from "./Components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  function saveData(updatedEmployees) {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }

  function addEmployee(employee) {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  }

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />

      <h2>Employee List</h2>

      {employees.map((employee, index) => (
        <div key={index}>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <p>Department: {employee.department}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
