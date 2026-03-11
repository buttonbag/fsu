import { NavLink } from "react-router";

export default function Navbar() {


  return (
    <header>
      <div>FSU</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/faculty">Faculty</NavLink>
        <NavLink to="/departments">Departments</NavLink>
      </nav>
    </header>
  )
}