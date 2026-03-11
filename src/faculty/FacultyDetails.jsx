import { API } from "#api/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function FacultyDetails() {
  const {id} = useParams();
  
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);
  
  useEffect(()=>{
    const getFacultyById = async() => {
      try {
        const response = await fetch(API+"/faculty/" + id);
        const result = await response.json();
        
        setFaculty(result);
      } catch (e) {
        console.log('SOMETHING WENT WRONG: ', e);
      }
    }
    getFacultyById();
  }, []);

  useEffect(()=>{
    const getDepartmentByFacultyId = async() => {
      try {
        
        const response = await fetch (API+ "/faculty/" + id + "/departments");
        const result = await response.json();
        console.log('DEPARTMENT:', result); 
        
        setDepartments(result);
      } catch (e) {
        console.log("ERROR GETTING DEPT BY FACULTY: ", e);
          
      }
    } 
    getDepartmentByFacultyId();
  }, []);

  return (
    <>
        
        <img src="http://placehold.co/200"/>
        <p>{departments.map((dept)=>(
          dept.name
        ))}</p>
        <h1>{faculty.first_name} {faculty.last_name}</h1>
        <p>Bio: {faculty.bio}</p>
        <p>Contact Info: {faculty.contact_info}</p>

    </>
  )
}