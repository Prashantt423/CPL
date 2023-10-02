import { React, useEffect, useState } from "react";
import "./login.css";
import logo from "../Assets/Images/logo/logo.png";
import authService from "../../Services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";



const Loginform = ({ flag }) => {
  const [user , setUser] = useState()
  const [dropDown, setDropDown] = useState("Admin");
  const [checkDropDown, setCheckDropdown] = useState("Knights");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = authService.getCurruntUser()
    if(getUser){
      navigate("/", {replace : true})
    }

  } , [])


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.logIn(email, password);

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/", { replace: true });
      flag(false);
    } catch (error) {
      console.log(error);
    }
  };
  


  
  let content;
  if (dropDown === "Team") {
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
  }
  return (
    <div className="background">
      <div className="child child-position">
        <img src={logo} alt="CPL logo" />
        <div className="content">
          <h3>Welcome</h3>
          <p>Enter Your Credentials to Proceed</p>
          <form onSubmit={handleLogin}>
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
            <input type="text" name="email" id="email" placeholder="Email" onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <input type="password" name="password" placeholder="Password" onChange={(e) => {
              setPassword(e.target.value)
            }} />

            <button className="logo" >LogIn</button>
            

          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;

