import Dashboard from "./Pages/Dashboard/Dashboard";
import Players from "./Pages/Players/Players";
import Teams from "./Pages/Teams/Teams";
import Nav from "./Pages/Nav/Nav";
import authService from "./Services/auth.service";
import { useEffect } from "react";
import AuctionScreen from "./Pages/Auction/AuctionControl/Auction";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./Pages/Seachbar/Searchbar";
import Form from "./Pages/Players/add player/Form";
import { useState } from "react";
import Loginform from "./Pages/Login/Loginform";
import Signup from "./signup/Signup";


function App() {
  const login = window.localStorage.getItem("isLoggedIn")
  const [loginFlag, setloginFlag] = useState(true);

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn")
    setloginFlag(!!isLoggedIn)
  }, [])

  const content = loginFlag ? <Dashboard/> : <Loginform flag={setloginFlag}/>
  // if(loginFlag === true){
  //   return(
  //     <Loginform flag={setloginFlag} />
  // )

  // }

  

  return (
    <div className="">
      <div className="main-content">
        
        
  
          <Nav />

          <div className="main-wrapper">
            <Searchbar />
            <Routes>

              <Route path="/" element={<Dashboard />} />
              <Route path="/players" element={<Players />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/auctioncontrol" element={<AuctionScreen />} />
              <Route path="/form" element={<Form />} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Loginform/>}></Route>
    
              
  
            </Routes>
          </div>
        
      </div>
    </div>
  );
}

export default App;
