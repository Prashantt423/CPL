import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass}/>
  return (
    <div className="search-bar">
      <input type="text"  placeholder= "Search "/> <button className="search-button">{searchIcon}</button>
    </div>
  );
};
export default Searchbar;
