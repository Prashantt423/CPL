import { useState } from "react";
import "./signup.css";
import authService from "../Services/auth.service";

const Signup = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [role , setRole] = useState("")

   const submitHandler = async (e) =>{
    e.preventDefault()
    try{
        await authService.signUp(name , email , password , confirmPassword , role).then(
            (response) =>{
                console.log("sign up Successfull", response)
            }, 
            (error) => {
                console.log("error is " , error)
            }
        );

    }catch (error) {
        console.log(error.response.data)
    }
    
   }
    
    return (
        <div className="main-form-container">
            <h1>Register User</h1>
                <form onSubmit={submitHandler}>
                    <div className="u-name">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="u-email">
                        <label >Email Address</label>
                        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="u-pass">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="u-pass2">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmpassword" placeholder="Re-enter Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="u-role">
                        <label>Role</label>
                        <select onChange={(e) => setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="team">Team</option>
                        </select>

                    </div>
                    <div className="reg-btn">
                        <button>Register</button>

                    </div>
                    

                </form>
        </div>
    );
};

export default Signup;
