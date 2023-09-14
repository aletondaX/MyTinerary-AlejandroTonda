import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

export default function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    // console.log(data);
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      dispatch(login(json));
      navigate("/");
    }
  };

  const handleSubmitGoogle = async (datax) => {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(datax),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      dispatch(login(json));
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Log In</h2>
        <GoogleLogin
          onSuccess={credentialResponse => {
            // console.log(credentialResponse);
            const infoUser = jwtDecode(credentialResponse.credential);
            console.log(infoUser);
            handleSubmitGoogle({
              email: infoUser.email,
              password: "Hola123"
            })
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <p>or</p>
        <form className="form-flex" onSubmit={handleSubmitData}>
          <input
            name="email"
            value={data.email}
            placeholder="Enter your email"
            type="text"
            onChange={handleChangeData}
          />
          <input
            name="password"
            value={data.password}
            placeholder="Enter your password"
            type="password"
            onChange={handleChangeData}
          />
          <button type="submit">Log In</button>
        </form>
        <div>
          <p>Don't have an account?</p>
          <h3><Link to="/signup">Sign Up</Link></h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
