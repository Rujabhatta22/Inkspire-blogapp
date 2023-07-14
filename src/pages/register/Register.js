import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { message } from "antd";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
          setError(false);

    try {
      const res = await axios.post("/users/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
            message.success("Register successfull")

    } catch (err) {
      setError(true);
    }
  };
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
          <input className="registerInput"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        <label>Email</label>
          <input className="registerInput"
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        <label>Password</label>
          <input className="registerInput"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <button className="registerButton" type="submit">Sign Up</button>
      </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Already have account?</Link>
        </button>
      {error && <span style={{color:"red", marginTop:"10px"}}> Something went wrong!</span>}
    </div>
    )
}
