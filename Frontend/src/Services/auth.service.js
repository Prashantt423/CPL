import axios from "axios";
const SignUp_URL = "http://localhost:6001/cpl/signup";
const logIn_URL = "http://localhost:6001/cpl/login";

const signUp = (email, password) => {
  return axios
    .post(SignUp_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logIn = (email, password) => {
  return axios
    .post(logIn_URL, {
      email,
      password,
    })
    .then((response) => {
      console.log(123);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logOut =  () =>{
    localStorage.removeItem('user');
}
const getCurruntUser = () =>{
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    signUp,
    logIn,
    logOut,
    getCurruntUser
}
export default authService