import { Navigate } from "react-router-dom";
import axios from "axios";

const SignUp_URL = "http://localhost:6001/cpl/signup";
const logIn_URL = "http://localhost:6001/cpl/login";

const signUp = (name, email, password, confirmPassword, role) => {
  return axios
    .post(
      SignUp_URL,
      {
        name,
        email,
        password,
        confirmPassword,
        role,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logIn = (email, password) => {
  return axios
    .post(
      logIn_URL,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.data.data.token) {
        // console.log("STORING COOKIE ... ");
        // console.log("TOKEN IS : ", response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.myuser));
      }
      return response.data;
    });
};

const logOut = () => {
  console.log("logout");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  console.log("cookie removed");
  window.location.reload();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signUp,
  logIn,
  logOut,
  getCurrentUser,
};

export default authService;
