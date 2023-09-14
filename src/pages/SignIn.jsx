import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
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
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Log In</h2>
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
