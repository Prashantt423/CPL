import "./Auction.css";
import playerlogo from "../Assets/Images/player/player image.png"

const Auction = () => {
  const playerImage = playerlogo
  return (
    <div className="wrapper">
      <div className="left-card">
        <img src={playerImage} alt="" className="player-img" />
        <p className="player-name">Ms DHONI</p>
        <div className="player-details">
          <div className="price">
            <p className="base-price">Base Price</p>
            <p className="price-value">15000</p>
          </div>
          <div className="player-type">
            <p className="type-head">Type</p>
            <p className="type-value">Batsman</p>
          </div>
          <div>
            <p className="runs">Runs</p>
            <p className="runs-value">106</p>
          </div>
          <div>
            <p className="wickets">Wickets</p>
            <p className="wicket-value">65</p>
          </div>
        </div>
        <div className="btn1">
          <button className="sold-btn">Sold</button>
        </div>
      </div>
      <div className="right-card">
        <div className="heading">
          <h1>Auction Control</h1>
          <div className="bidding">
            <div className="bid-price">
              <label htmlFor="bid-value">Bidding Price</label>
              <input type="number" name="bid-value" min="1000" max="50000" value="15000" step="1000" />
            </div>
            <div className="plus1">
              <button className="hundred">+100</button>
            </div>
            <div className="plus2">
              <button className="two-hundred">+200</button>
            </div>
            <div className="plus3">
              <button className="five-hundred">+500</button>
            </div>
          </div>
          <div className="btn3">
            <button className="update-btn">Update Price</button>
          </div>
        </div>
        <div className="team-details">
          <div className="new-team">
            <label htmlFor="team-name">New Team</label>
            <select name="team" id="team">
              <option value="Knights">Knights</option>
              <option value="hurricanes">Hurricanes</option>
              <option value="royals">Royals</option>
              <option value="blasters">Blasters</option>
              <option value="stars">Stars</option>
              <option value="panthers">Panthers</option>
              
            </select>
          </div>
          <div className="sold-data">
            <p className="sold">Sold Players</p>
            <p className="sold-value">152</p>
          </div>
          <div className="unsold-data">
            <p className="unsold">Unsold Players</p>
            <p className="unsold-value">335</p>
          </div>
        </div>
      </div>
      <div className="next-player">
        <div className="player-type">
          
        </div>


      </div>

    </div>

  )

};
export default Auction;
