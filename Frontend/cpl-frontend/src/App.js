import Dashboard from "./Pages/Dashboard/Dashboard";
import Players from "./Pages/Players/Players";
import Teams from "./Pages/Teams/Teams";
import Nav from "./Pages/Nav/Nav";
import Auction from "./Pages/Auction/Auction";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./Pages/Seachbar/Searchbar";

function App() {
  return (
    <div className="">
      <div className="main-content">
        <Router>
          <Nav />

          <div className="main-wrapper">
            <Searchbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/players" element={<Players />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/auction" element={<Auction />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
