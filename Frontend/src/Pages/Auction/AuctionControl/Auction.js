import "./Auction.css";
import playerlogo from "../../Assets/Images/player/player image.png";
import allRounderlogo from "../../Assets/Images/player_type_icons/All_rounder.png";
import batterlogo from "../../Assets/Images/player_type_icons/batter.png";
import bowlerlogo from "../../Assets/Images/player_type_icons/bowler.png";
import { useState } from "react";

const AuctionScreen = () => {
  // const playerImage = playerlogo;

  const [bidprice, setbidprice] = useState(1000);

  return (
    <div className="wrapper">
      <div className="profile">
        <img src={playerlogo} alt="current player logo" />
        <div>
          <h3 className="playerName">MS DHONI</h3>
          <div className="player-summary">
            <div>
              <div className="summary-title">Base Price</div>
              <div className="summary-stats">15,000</div>
            </div>
            <div>
              <div className="summary-title">Type</div>
              <div className="summary-stats">15000</div>
            </div>
            <div>
              <div className="summary-title">Runs</div>
              <div className="summary-stats">106</div>
            </div>
            <div>
              <div className="summary-title">Wicket</div>
              <div className="summary-stats">65</div>
            </div>
          </div>
          <div className="sold-wrapper">
            <button className="soldbtn">SOLD</button>
          </div>
        </div>
      </div>
      <div className="auction-control">
        <h3>Auction Control</h3>

        <div className="bid-control">
          <div>
            <label>Biding Price</label>
            <input
              value={bidprice}
              id="bid-input"
              className="bid-input"
              type="number"
            />
          </div>

          <button onClick={incrementBidPrice}>+ 100</button>
          <button>+ 500</button>
          <button>+ 1000</button>
        </div>

        <div className="update-bid-wrapper">
          <button className="update-bid-btn">Update Price</button>
        </div>

        <div className="nextplayer">
          <div className="nextplayer-left">
            <table>
              <tr>
                <td>
                  <label>New Team</label>
                </td>
                <td>
                  <input className="nextplayer-input" type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Next Player</label>
                </td>
                <td>
                  <input className="nextplayer-input" type="number" />
                </td>
              </tr>
            </table>
          </div>

          <div className="nextplayer-right">
            {/* SOLD PLAYERS */}
            <div className="soldplayer-stats stats-box">
              SOLD PLAYERS
              <div className="player-digit">145</div>
              <div className="icon-wrapper">
                <div>
                  <img
                    className="player-type-icon"
                    src={batterlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
                <div>
                  <img
                    className="player-type-icon"
                    src={allRounderlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
                <div>
                  <img
                    className="player-type-icon"
                    src={bowlerlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
              </div>
            </div>

            {/* UNSOLD PLAYER */}
            <div className="soldplayer-stats stats-box">
              UNSOLD PLAYERS
              <div className="player-digit">145</div>
              <div className="icon-wrapper">
                <div>
                  <img
                    className="player-type-icon"
                    src={batterlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
                <div>
                  <img
                    className="player-type-icon"
                    src={allRounderlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
                <div>
                  <img
                    className="player-type-icon"
                    src={bowlerlogo}
                    alt="current player logo"
                  />
                  <span>149</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionScreen;

function incrementBidPrice() {
  alert("clicked");
}
