import { NavLink } from "react-router";

export default function Navbar() {


  return (
    <header className="navbar">
      <div className="brand">FSU</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/faculty">Faculty</NavLink>
        <NavLink to="/departments">Departments</NavLink>
      </nav>
    </header>
  )
}