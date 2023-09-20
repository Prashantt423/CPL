import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <img src="/public/assets/images/logo.png" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/auction">Auction</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
