import "./Nav.css";
import logo from "./logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";


import { Link } from "react-router-dom";

const Nav = () => {
  const dashIcon = <FontAwesomeIcon icon={faTableColumns}/>
  const peopeIcon = <FontAwesomeIcon icon={faPeopleGroup}/>
  const teamIcon = <FontAwesomeIcon icon={faUser}/>
  const auctionIcon = <FontAwesomeIcon icon={faMoneyBills}/>

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">{dashIcon} Dashboard</Link>
          </li>
          <li>
            <Link to="/players">{teamIcon} Players</Link>
          </li>
          <li>
            <Link to="/teams">{peopeIcon} Teams</Link>
          </li>
          <li>
            <Link to="/auction">{auctionIcon} Auction</Link>
    
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
