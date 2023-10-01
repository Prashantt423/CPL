import { useState } from "react";
import "./signup.css";
import authService from "../Services/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("admin");

  const formValidation = function () {
    if (password.length < 8) {
      toast.error("Password must be of 8 characters or more");
      return false;
    }
    if (confirmPassword !== password) {
      toast.error("Password and comnfirm password must be same");
      return false;
    }
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      toast.error("You have entered an invalid email address!");
      return false;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formValidation()) {
      //toast.success("DONE");
      try {
        await authService
          .signUp(name, email, password, confirmPassword, role)
          .then(
            (response) => {
              console.log("sign up Successfull", response);
              toast.success(`New ${role} added successfully`);

              // clear the form
              setName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
            },
            (error) => {
              let errorMsg = error.response.data.data;
              console.log(errorMsg);
              if (errorMsg) {
                if (errorMsg.slice(0, 5) === "E1100") {
                  toast.error("User Already Exist, try another email address");
                } else {
                  toast.error(errorMsg.slice(0, 5)); // Display an error toast
                }
              }
            }
          );
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div
      className="container register-form"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={submitHandler}>
        {/* Add new user */}
        <fieldset style={{ backgroundColor: "#D1E8FF", width: "30vw" }}>
          <legend>Add New User</legend>
          <div className="form-container">
            <div className="row">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="form-inputs"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="name">Email</label>
                <input
                  className="form-inputs"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="name">Password</label>
                <input
                  className="form-inputs"
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="name">Confirm Password</label>
                <input
                  className="form-inputs"
                  type="password"
                  name="setConfirmPassword"
                  id="cpassword"
                  required
                  placeholder="re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="previousteam">Roles</label>

                <select
                  name="role"
                  className="dropdown"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="admin">Administrator</option>
                  <option value="team">Team</option>
                </select>
              </div>
            </div>
            <div className="row">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
