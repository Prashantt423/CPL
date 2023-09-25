import React, { useState } from "react";
import "./form.css";
import axios from "axios"

const Form = () => {
  const [formData, setFormData] = useState({
    playername: "",
    mobilenumber: "",
    curruntsemester: "sem1",
    dateofbirth: "",
    branchname: "software",
    playerphoto: null,
    baseprice: "",
    bidprice: "",
    previousteam: "Knights",
    curruntteam: "Knights",
    playertype: "batsman",
    totalruns: "",
    innings: "",
    strikerate: "",
    averageruns: "",
    totalwickets: "",
    averagebowling: "",
    economy: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formDataJson = JSON.stringify(formData)
    axios.post("http://localhost:6001/player/add" , formDataJson ,{
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
          <h2>Personal Details</h2>
          <div className="col-1">
            <div className="name">
              <label htmlFor="playername">Player Name</label>
              <br />
              <input
                type="text"
                name="playername"
                id="playername"
                placeholder="Enter Name"
                value={formData.playername}
                onChange={handleInputChange}
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
                value={formData.mobilenumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="semester">
              <label htmlFor="curruntsemester">Current Semester</label>
              <br />
              <select
                name="curruntsemester"
                id="sem"
                value={formData.curruntsemester}
                onChange={handleInputChange}
              >
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
                placeholder="Select date"
                value={formData.dateofbirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="branch-details">
              <label htmlFor="branchname">Branch</label>
              <br />
              <select
                name="branchname"
                value={formData.branchname}
                onChange={handleInputChange}
              >
                <option value="software">Software Development Web And mobile</option>
                <option value="it/ims">IT/IMS</option>
                <option value="animation">Animation</option>
                <option value="cyber-security">Cyber Security</option>
                <option value="cloud computing">Cloud Computing</option>
              </select>
            </div>
            <div className="photo">
              <label htmlFor="playerphoto">Player's Photo</label>
              <br />
              <input
                type="file"
                accept="image/*"
                id="playerphoto"
                name="playerphoto"
                onChange={handleInputChange}
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
              <input
                type="text"
                name="baseprice"
                placeholder="Base price"
                value={formData.baseprice}
                onChange={handleInputChange}
              />
            </div>
            <div className="bid-price">
              <label htmlFor="bidprice">Bid Price</label>
              <br />
              <input
                type="text"
                name="bidprice"
                placeholder="Bid price"
                value={formData.bidprice}
                onChange={handleInputChange}
              />
            </div>
            <div className="prev-team">
              <label htmlFor="previousteam">Previous Team</label>
              <br />
              <select
                name="previousteam"
                value={formData.previousteam}
                onChange={handleInputChange}
              >
                <option value="Knights">Knights</option>
                <option value="hurricanes">Hurricanes</option>
                <option value="royals">Royals</option>
                <option value="blasters">Blasters</option>
                <option value="stars">Stars</option>
                <option value="panthers">Panthers</option>
              </select>
            </div>
            <div className="currunt-team">
              <label htmlFor="curruntteam">Current Team</label>
              <br />
              <select
                name="curruntteam"
                value={formData.curruntteam}
                onChange={handleInputChange}
              >
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
              <select
                name="playertype"
                value={formData.playertype}
                onChange={handleInputChange}
              >
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
              <input
                type="text"
                name="totalruns"
                placeholder="Total runs"
                value={formData.totalruns}
                onChange={handleInputChange}
              />
            </div>
            <div className="innings">
              <label htmlFor="innings">Innings</label>
              <br />
              <input
                type="text"
                name="innings"
                placeholder="Innings"
                value={formData.innings}
                onChange={handleInputChange}
              />
            </div>
            <div className="strike-rate">
              <label htmlFor="strikerate">Strike Rate</label>
              <br />
              <input
                type="text"
                name="strikerate"
                placeholder="Strike rate"
                value={formData.strikerate}
                onChange={handleInputChange}
              />
            </div>
            <div className="average">
              <label htmlFor="averageruns">Average</label>
              <br />
              <input
                type="text"
                name="averageruns"
                placeholder="Average"
                value={formData.averageruns}
                onChange={handleInputChange}
              />
            </div>
            <div className="total-wickets">
              <label htmlFor="totalwickets">Total Wickets</label>
              <br />
              <input
                type="text"
                name="totalwickets"
                placeholder="Total wickets"
                value={formData.totalwickets}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="average-b">
              <label htmlFor="averagebowling">Average</label>
              <br />
              <input
                type="text"
                name="averagebowling"
                placeholder="Average"
                value={formData.averagebowling}
                onChange={handleInputChange}
              />
            </div>
            <div className="eco">
              <label htmlFor="economy">Economy</label>
              <br />
              <input
                id="economy"
                type="text"
                name="economy"
                placeholder="Economy"
                value={formData.economy}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

