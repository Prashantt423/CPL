import Dashboard from "./Pages/Dashboard/Dashboard";
import Players from "./Pages/Players/Players";
import Teams from "./Pages/Teams/Teams";
import Nav from "./Pages/Nav/Nav";
import AuctionScreen from "./Pages/Auction/AuctionControl/Auction";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./Pages/Seachbar/Searchbar";
import Form from "./Pages/Players/add player/Form";
import { useState } from "react";
import Loginform from "./Pages/Login/Loginform";
import Signup from "./signup/Signup";


function App() {
  const [loginFlag, setloginFlag] = useState(true);
  if (loginFlag) {
    return <Loginform flag={setloginFlag} />;
  }

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
    
              
  
            </Routes>
          </div>
        
      </div>
    </div>
  );
}

export default App;
