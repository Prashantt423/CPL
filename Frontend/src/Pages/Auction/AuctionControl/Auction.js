import "./Auction.css";
import playerlogo from "../../Assets/Images/player/player image.png";

const AuctionScreen = () => {
  // const playerImage = playerlogo;
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
            <input className="bid-input" type="number" />
          </div>

          <button>+ 100</button>
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
            <div className="soldplayer-stats stats-box">SOLD PLAYERS</div>
            <div className="unsoldplayer-stats stats-box">UNSOLD PLAYERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuctionScreen;
