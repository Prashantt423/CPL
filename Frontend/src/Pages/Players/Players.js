import { useState } from "react";
import "./Players.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import batterlogo from "../Assets/Images/player_type_icons/batter.png";
import bowlerlogo from "../Assets/Images/player_type_icons/bowler.png";
import allrounderlogo from "../Assets/Images/player_type_icons/All_rounder.png";

const Players = () => {
  const editIcon = <FontAwesomeIcon icon={faPencilAlt} />;
  const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

  function playerTypeicon(type) {
    if (type === "allrounder") {
      return allrounderlogo;
    }
    if (type === "batsman") {
      return batterlogo;
    }
    if (type === "bowler") {
      return bowlerlogo;
    }
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6001/player/", { withCredentials: true })
      .then((response) => {
        console.log("Player data:", response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log("Error fetching player data:", err));
  }, []);

  return (
    <div className="card">
      <div className="header">
        <div className="heading">
          <h2>Players</h2>
        </div>
        <div className="add-btn">
          <Link to="/form" className="add-player">
            Add New
          </Link>
        </div>
      </div>

      <div className="table-wrapper players-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Semester</th>
              <th>Type</th>
              <th>Base Price</th>
              <th>Bid Price</th>
              <th>Average</th>
              <th>SR</th>
              <th>ECO</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((player) => {
                return (
                  <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>{player.currentSemester}</td>
                    <td>
                      <img
                        style={{
                          height:
                            player.playerType === "bowler" ? "15px" : "20px",
                          opacity: ".4",
                        }}
                        src={playerTypeicon(player.playerType)}
                        alt="current player logo"
                      />
                    </td>
                    <td>{player.basePrice}</td>
                    <td>{player.bidPrice}</td>
                    <td>{player.average}</td>
                    <td>{player.strikeRate}</td>
                    <td>{player.economyRate}</td>
                    <td>
                      <Link to={`/update/${player._id}`}>
                        <span className="nav-icons">{editIcon}</span>
                      </Link>
                      <span className="nav-icons">{deleteIcon}</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Players;
