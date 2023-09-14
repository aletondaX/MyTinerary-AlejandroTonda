import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/actions/authAction";

export default function NavBar() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const { user, isLogged } = useSelector(store => store.authReducer)
  const dispatch = useDispatch();

  // const logOut = () => {   //lo puse directamente abajo
  //   dispatch(logout());
  // }

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
          {isLogged ?
          <>
            <Link to="/" onClick={() => dispatch(logout())} className="highlight-button">Log Out</Link>
            <img src={user.imgUrl} alt="" draggable="false"/>
          </> :
          <>
            <Link to="/login" className="highlight-button">Log In</Link>
            <img src="/def-user.png" alt="" draggable="false"/>
          </> }
        </div>
      </div>
      <button onClick={() => setMenuOpen(!MenuOpen)} className="menu-icon">
      {MenuOpen ? <i className="fas fa-times"></i> :
      <i className="fas fa-bars"></i>}</button>
    </nav>
  );
}