
import React, { useState } from "react";
import "../EmployeeForm.css";
function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee((previous) => ({
      ...previous,
      [name]: value
    }));
  }

 function handleSubmit(event) {
  event.preventDefault();

  addEmployee(employee);

  alert("Employee saved successfully!");

  setEmployee({
    name: "",
    email: "",
    department: ""
  });
}
  

  return (
    <div>
      <h1>Employee Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Employee Name:</label>
        <input
          id="name"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label htmlFor="department">Department:</label>
        <input
          id="department"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;

