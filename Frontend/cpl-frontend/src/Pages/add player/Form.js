import "./form.css";
const Form = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="heading">
          <h1>Add Player</h1>
        </div>
        <div className="submit-btn">
          <button className="submit" type="submit">
            Add
          </button>
        </div>
      </div>
      <div className="personal-details">
        <h2> Personal Details </h2>
        <div className="col-1">
          <div className="name">
            <label>Player Name</label>
            <br></br>
            <input
              type="text"
              name="playername"
              id="playername"
              placeholder="Enter Name"
            />
          </div>
          <div className="mob-num">
            <label htmlFor="mobilenumber">Mobile Number</label>
            <br />
            <input
              type="text"
              name="mobilenumber"
              id="mobilenumber"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="semester">
            <label htmlFor="semester">Currunt Semester</label>
            <br />
            <select name="currunt semester" id="sem">
              <option value="sem1">Semester 1</option>
              <option value="sem3">Semester 3</option>
              <option value="sem5">Semester 5</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="dob">
            <label htmlFor="dateofbirth">Date of Birth</label>
            <br />
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              placeholder="select date"
            />
          </div>
          <div className="branch-details">
            <label htmlFor="branchname">Branch</label>
            <br />
            <select name="branchname">
              <option value="software">
                Software Development Web And mobile
              </option>
              <option value="it/ims">IT/IMS</option>
              <option value="animation">Animation</option>
              <option value="cyber-security">Cyber Security</option>
              <option value="cloud computing">Cloud Computing</option>
            </select>
          </div>
          <div className="photo">
            <label htmlFor="playerphoto">Player's Photo</label>
            <br></br>
            <input
              type="file"
              alt="upload or drag and drop"
              name="playerphoto"
            />
          </div>
        </div>
      </div>
      <div className="auction">
        <h2>Auction</h2>
        <div className="col-3">
          <div className="base-price">
            <label htmlFor="baseprice">Base Price</label>
            <br />
            <input type="text" name="baseprice" placeholder="Base price" />
          </div>
          <div className="bid-price">
            <label htmlFor="bidprice">Bid Price</label>
            <br />
            <input type="text" name="bidprice" placeholder="Bid price" />
          </div>
          <div className="prev-team">
            <label htmlFor="previousteam">Previos Team</label>
            <br />
            <select name="previousteam">
              <option value="Knights">Knights</option>
              <option value="hurricanes">Hurricanes</option>
              <option value="royals">Royals</option>
              <option value="blasters">Blasters</option>
              <option value="stars">Stars</option>
              <option value="panthers">Panthers</option>
            </select>
          </div>
          <div className="currunt-team">
            <label htmlFor="curruntteam">Currunt Team</label>
            <br />
            <select name="curruntteam">
              <option value="Knights">Knights</option>
              <option value="hurricanes">Hurricanes</option>
              <option value="royals">Royals</option>
              <option value="blasters">Blasters</option>
              <option value="stars">Stars</option>
              <option value="panthers">Panthers</option>
            </select>
          </div>
          <div className="player-type">
            <label htmlFor="playertype">Player Type</label>
            <br />
            <select>
              <option value="batsman">Batsman</option>
              <option value="bowler">Bowler</option>
              <option value="allrounder">All Rounder</option>
            </select>
          </div>
        </div>
      </div>
      <div className="statistics">
        <h2>Statistics</h2>
        <div className="col-4">
          <div className="total-runs">
            <label htmlFor="totalruns">Total Runs</label>
            <br />
            <input type="text" placeholder="Total runs" />
          </div>
          <div className="innings">
            <label>Innings</label>
            <br />
            <input type="text" placeholder="Innings" />
          </div>
          <div className="strike-rate">
            <label>Strike Rate</label>
            <br />
            <input type="text" placeholder="Strike rate" />
          </div>
          <div className="average">
            <label>Average</label>
            <br />
            <input type="text" placeholder="Average" />
          </div>
          <div className="total-wickets">
            <label>Total Wickets</label>
            <br />
            <input type="text" placeholder="Total wickets" />
          </div>
        </div>
        <div className="col-5">
          <div className="average-b">
            <label>Average</label>
            <br/>
            <input type="text" placeholder="Average"/>
          </div>
          <div className="eco">
            <label for="economy">ECO</label>
            <br/>
            <input id='economy' type="text" name="" placeholder="ECO"/>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
