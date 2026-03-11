import { API } from "#api/data";
import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  
  useEffect(()=>{
    const getFaculty = async() => {
        try {
        const response = await fetch(API+"/faculty");
        const result = await response.json();
        
        setFaculty(result);
      } catch (e) {
        console.log('SOMETHING WENT WRONG: ', e);
      }
    }
    getFaculty();
  }, [])

  return (
    <>
      <h1>All Faculty</h1>
      <ul>
      {faculty.map((member)=>(
        <li><Link to={"/faculty/"+member.id}>{member.first_name} {member.last_name}</Link></li>
      ))}
      </ul>
    </>
  )
}