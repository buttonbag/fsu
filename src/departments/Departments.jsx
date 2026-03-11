import { getDepartments } from "#api/departments";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const syncDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    }
    syncDepartments();
  }, []);

  return (
    <>
      <h1>All Departments</h1>
      <ul>
        {departments.map((dept) => (
          <li><Link to={"/departments/" + dept.id}>{dept.name}</Link></li>
        ))}
      </ul>
    </>
  )
}