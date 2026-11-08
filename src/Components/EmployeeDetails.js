import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees[Number(id)];

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>

      <Link to="/">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetails;