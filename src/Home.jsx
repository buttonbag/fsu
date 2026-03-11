import { Link } from "react-router";

export default function Home() {

  return (
    <>
      <h1>Welcome to FSU</h1>
      <Link to={"/faculty"}>View Faculty</Link>
      <Link to={"/departments"}>View Departments</Link>
    </>
  )
}


