import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export default function SignUp() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChangeData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    // console.log(data);
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      navigate("/login");
    }
  };

  const handleSubmitGoogle = async (datax) => {
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(datax),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Sign Up</h2>
        <GoogleLogin
          onSuccess={credentialResponse => {
            // console.log(credentialResponse);
            const infoUser = jwtDecode(credentialResponse.credential);
            console.log(infoUser);
            handleSubmitGoogle({
              firstName: infoUser.given_name,
              lastName: infoUser.family_name,
              email: infoUser.email,
              password: "Hola123",
              imgUrl: infoUser.picture,
              country: "Google"
            })
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <p>or</p>
        <form className="form-flex" onSubmit={handleSubmitData}>
          <input
            name="firstName"
            value={data.firstName}
            placeholder="Enter your first name"
            type="text"
            onChange={handleChangeData}
          />
          <input
            name="lastName"
            value={data.lastName}
            placeholder="Enter your last name"
            type="text"
            onChange={handleChangeData}
          />
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
          <input
            name="imgUrl"
            value={data.imgUrl}
            placeholder="Enter a image URL"
            type="text"
            onChange={handleChangeData}
          />
          <select name="country" value={data.country} onChange={handleChangeData}>
            <option value="">Select your country</option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="United States">United States</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        <div>
          <p>Already have an account?</p>
          <h3><Link to="/login">Log In</Link></h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
