import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}
        to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}
        to="/cities">Cities</NavLink>
      <Link className="highlight-button" to="#">Log In</Link>
      <img src="def-user.png" alt="" />
    </nav>
  );
}