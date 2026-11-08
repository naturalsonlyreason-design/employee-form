

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import EmployeeDetails from "./Components/EmployeeDetails";

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeForm addEmployee={addEmployee} />
              <EmployeeList employees={employees} />
            </>
          }
        />

        <Route
          path="/employees/:id"
          element={<EmployeeDetails employees={employees} />}
        />
      </Routes>
    </div>
  );
}

export default App;
