import "./Players.css";
import { Link } from "react-router-dom";

const Players = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="heading">
          <h1>Players</h1>
        </div>
        <div className="add-btn">
          <Link to="/form" className="add-player">
            Add New
          </Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Purchase Price</th>
              <th>Average</th>
              <th>SR</th>
              <th>ECO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Smith</td>
              <td>Batsman</td>
              <td>500,000 USD</td>
              <td>45.67</td>
              <td>120.45</td>
              <td>4.78</td>
            </tr>
            <tr>
              <td>Michael Davis</td>
              <td>Bowler</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>David Lee</td>
              <td>All Rounder</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Christopher Taylor</td>
              <td>Batsman</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Christopher Taylor</td>
              <td>Batsman</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Robert Johnson</td>
              <td>All Rounder</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>James Wilson</td>
              <td>Bowler</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Joseph Anderson</td>
              <td>All Rounder</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Benjamin Clark</td>
              <td>Bowler</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
            <tr>
              <td>Daniel White</td>
              <td>Bowler</td>
              <td>350,000 USD</td>
              <td>26.89</td>
              <td>98.34</td>
              <td>5.12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Players;
