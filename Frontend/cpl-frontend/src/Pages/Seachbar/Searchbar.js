import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <div className="search-bar">
      <div className="serch-input">
        <input type="text" placeholder="Search " />{" "}
        <span className="search-icon">{searchIcon}</span>
      </div>
    </div>
  );
};
export default Searchbar;
