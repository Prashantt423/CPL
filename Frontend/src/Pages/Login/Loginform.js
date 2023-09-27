import { React, useEffect, useState } from "react";
import "./login.css";
import logo from "../Assets/Images/logo/logo.png";

const Loginform = () => {
  const [DropDown, setDropDown] = useState("admin");
  const [CheckDropdown, setCheckDropdown] = useState("Knights");
  const [CheckPass, setCheckPass] = useState("");
  const [User, setUser] = useState("");
  const [message, setMessage] = useState("");

  let content;

  if (DropDown === "team") {
    content = (
      <select
        name="team"
        id="team"
        onChange={(e) => {
          setCheckDropdown(e.target.value);
        }}
      >
        <option value="Knights">Knights</option>
        <option value="Hurricanes">Hurricanes</option>
        <option value="Royals">Royals</option>
        <option value="Blaster">Blaster</option>
        <option value="Star">Star</option>
        <option value="Panthers">Panthers</option>
        <option value="Empire">Empire</option>
        <option value="Wolves">Wolves</option>
        <option value="Super Kings">Super Kings</option>
        <option value="Strikers">Strikers</option>
        <option value="Titans">Titans</option>
        <option value="Falcons">Falcons</option>
      </select>
    );
  } else if (DropDown === "admin") {
    content = (
      <input
        type="text"
        placeholder="Username"
        id="username"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (User === CheckPass) {
      setMessage("User name and password cannot be the same");
    } else if (CheckDropdown === CheckPass) {
      setMessage("Team name and password cannot be the same");
    } else if (CheckPass.length < 8) {
      setMessage("Password is shorter than 8 Characters");
    } else {
      setMessage("Login Success!");
    }
  };

  return (
    <>
      <div className="background">
        <div className="child child-position">
          <div></div>
          <img alt="CPL logo" src={logo}></img>
          <div className="content">
            <h3>Welcome</h3>
            <p>Enter Your Credentials to Proceed</p>

            <form onSubmit={submitHandler}>
              <select
                name="user"
                id="user"
                onChange={(e) => {
                  setDropDown(e.target.value);
                }}
              >
                <option value="admin">Administrator</option>
                <option value="team">Team</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setCheckPass(e.target.value);
                }}
              />
              <button className="logo">Login</button>
              {content}
            </form>
          </div>
          <div className="message">{message}</div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
