import { getDepartmentById, getFacultyByDepartmentId } from "#api/departments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DepartmentDetails() {
  const { id } = useParams();

  const [department, setDepartment] = useState([]);
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const syncDepartmentById = async () => {
      const data = await getDepartmentById(id);
      setDepartment(data);
    }
    syncDepartmentById();

    const syncFacultyByDepartmentId = async () => {
      const data = await getFacultyByDepartmentId(id);
      setFaculty(data);
    }
    syncFacultyByDepartmentId();
  }, []);

  return (
    <>
      <h1>{department.name}</h1>
      <p>{department.description}</p>
    </>
  )
}