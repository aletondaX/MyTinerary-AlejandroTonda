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
  const [errorMessage, setErrorMessage] = useState("");
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
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })//.catch(error => console.log("acá tamo"));
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
        dispatch(login(json));
        navigate("/");
      } else if (json.details) {
        // console.log(json.details[0].message);
        setErrorMessage(json.details[0].message);
      } else {
        // console.log(json.message);
        setErrorMessage(json.message);
      }
    } catch (error) {
      console.log("Entré al catch");
      console.log(error);
    }
  };

  const handleSubmitGoogle = async (datax) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="form-container">
          <h2>Log In</h2>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // console.log(credentialResponse);
              const infoUser = jwtDecode(credentialResponse.credential);
              console.log(infoUser);
              handleSubmitGoogle({
                email: infoUser.email,
                password: "Hola123",
              });
            }}
            onError={() => {
              console.log("Login Failed");
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
            <p className="errormsg">{errorMessage}</p>
          </form>
          <div className="flexear">
            <p>Don't have an account?</p>
            <h3>
              <Link to="/signup">Sign Up</Link>
            </h3>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
