import "./teams.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Teams = () => {
  const auctionIcon = <FontAwesomeIcon icon={faPencil} />;

  return (
    <div className="card">
      <h1>Teams</h1>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Player</th>
              <th>Bid Price Left</th>
              <th>Coach/mentor</th>
              <th>All rounder</th>
              <th>Batsman</th>
              <th>Bowler</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KNIGHTS</td>
              <td>04</td>
              <td>34,000</td>
              <td>Mr John mori</td>
              <td>1</td>
              <td>3</td>
              <td>0</td>
              <td>
                <span className="nav-icons">{auctionIcon}</span>
              </td>
            </tr>
            <tr>
              <td>HURRICANES</td>
              <td>06</td>
              <td>35,000</td>
              <td>Peter parker</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>
                <span className="nav-icons">{auctionIcon}</span>
              </td>
            </tr>
            <tr>
              <td>ROYALS</td>
              <td>04</td>
              <td>12,000</td>
              <td>Tony Stark</td>
              <td>1</td>
              <td>2</td>
              <td>1</td>
              <td>
                <span className="nav-icons">{auctionIcon}</span>
              </td>
            </tr>
            <tr>
              <td>BLASTERS</td>
              <td>12</td>
              <td>1,000 </td>
              <td>Ralph raider</td>
              <td>7</td>
              <td>3</td>
              <td>2</td>
              <td>
                <span className="nav-icons">{auctionIcon}</span>
              </td>
            </tr>
            <tr>
              <td>STARS</td>
              <td>11</td>
              <td>3,500</td>
              <td>Jon Snow</td>
              <td>6</td>
              <td>5</td>
              <td>1</td>
              <td>
                <span className="nav-icons">{auctionIcon}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Teams;
