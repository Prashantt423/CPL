import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const personIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <div className="search-bar">
      <div className="serch-input">
        <input className="search-input" type="text" placeholder="Search " />{" "}
        <span className="search-icon">{searchIcon}</span>
      </div>

      <div className="current-user-login">
        <div>
          <span className="person-icon">{personIcon}</span>
        </div>
        <div>
          <p>Meezan Mallick</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
