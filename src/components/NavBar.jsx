import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className={MenuOpen ? "links-open" : "links-closed"}>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}
          to="/">Home</NavLink>
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}
          to="/cities">Cities</NavLink>
        <div className="login">
          <Link className="highlight-button" to="#">Log In</Link>
          <img src="/def-user.png" alt="" draggable="false"/>
        </div>
      </div>
      <button onClick={() => setMenuOpen(!MenuOpen)} className="menu-icon">
      {MenuOpen ? <i className="fas fa-times"></i> :
      <i className="fas fa-bars"></i>}</button>
    </nav>
  );
}