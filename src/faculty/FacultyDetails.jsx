import { getDepartmentByFacultyId, getFacultyById } from "#api/faculty";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function FacultyDetails() {
  const { id } = useParams();

  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const syncFacultyById = async () => {
      const data = await getFacultyById(id);
      setFaculty(data);
    }
    syncFacultyById();

    const syncDepartmentByFacultyId = async () => {
      const data = await getDepartmentByFacultyId(id);
      setDepartments(data);
    }
    syncDepartmentByFacultyId();
  }, []);


  return (
    <>
      <img src="http://placehold.co/200" />
      <p>{departments.map((dept) => (
        dept.name
      ))}</p>
      <h1>{faculty.first_name} {faculty.last_name}</h1>
      <p>Bio: {faculty.bio}</p>
      <p>Contact Info: {faculty.contact_info}</p>
    </>
  )
}