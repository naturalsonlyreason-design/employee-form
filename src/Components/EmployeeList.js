import React from "react";
import { Link } from "react-router-dom";

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee, index) => (
          <li key={employee.EmployeeId || index}>
           <Link to={`/employees/${index}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;