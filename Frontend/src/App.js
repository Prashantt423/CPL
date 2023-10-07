import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import authService from "./Services/auth.service";
import Nav from "./Pages/Nav/Nav";
import Searchbar from "./Pages/Seachbar/Searchbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Players from "./Pages/Players/Players";
import Teams from "./Pages/Teams/Teams";
import AuctionScreen from "./Pages/Auction/AuctionControl/Auction";
import Form from "./Pages/Players/add player/Form";
import Loginform from "./Pages/Login/Loginform";
import Signup from "./signup/Signup";
import Update from "./Pages/Players/update_player/update";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loginFlag, setLoginFlag] = useState(!token);
  const [logOutFlag, setLogOutFlag] = useState(localStorage.getItem("token"));

  if (loginFlag) {
    // If not logged in, show the Loginform
    return <Loginform flag={setLoginFlag} />;
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
            <Route path="/signup" element={<Signup />} />
            {/* Default redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/login" element={<Loginform />} />

            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
