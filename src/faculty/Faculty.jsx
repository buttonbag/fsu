import { getFaculty } from "#api/faculty";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  
  useEffect(()=>{
    const syncFaculty = async() => {
        const data = await getFaculty();
        setFaculty(data);
    }
    syncFaculty();
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