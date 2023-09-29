import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const fileuploadicon = <FontAwesomeIcon icon={faArrowUpFromBracket} />;

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
    currentteam: "Knights",
    playertype: "batsman",
    totalruns: "",
    innings: "",
    strikerate: "",
    averageruns: "",
    totalwickets: "",
    economy: "",
  });

  const handleInputChange =(e) =>{
    const {name , value , type , files} = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,

    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)
    const formDataJson = JSON.stringify(formData)
    axios.post("http://localhost:6001/player/add" , formDataJson, {
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
          <div>
            <h2>Add Player</h2>
          </div>
          <div className="submit-btn">
            <button className="submit" type="submit">
              Add
            </button>
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <fieldset>
          <legend>Pesonal Details</legend>
          <div className="form-container">
            <div className="row">
              <div>
                <label htmlFor="playername">Player Name</label>

                <input
                  className="form-inputs"
                  type="text"
                  name="playername"
                  id="playername"
                  placeholder="Enter Name"
                  value={formData.playername}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="mobilenumber">Mobile Number</label>

                <input
                  className="form-inputs"
                  type="text"
                  name="mobilenumber"
                  id="mobilenumber"
                  placeholder="Enter Mobile Number"
                  value={formData.mobilenumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="curruntsemester">Current Semester</label>

                <select
                  name="curruntsemester"
                  className="dropdown"
                  value={formData.curruntsemester}
                  onChange={handleInputChange}
                >
                  <option value="sem1">Semester 1</option>
                  <option value="sem3">Semester 3</option>
                  <option value="sem5">Semester 5</option>
                  <option value="sem5">Semester 7</option>
                  <option value="sem5">Semester 9</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div>
                <label htmlFor="DOB">Date of Birth</label>
                <input
                  className="form-inputs"
                  type="date"
                  name="dateofbirth"
                  id="DOB"
                  value={formData.dateofbirth}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="branch">Branch</label>

                <select
                  name="branch"
                  className="dropdown"
                  value={formData.branchname}
                  onChange={handleInputChange}
                >
                  <option value="software">Software</option>
                  <option value="itims">ITIMS</option>
                  <option value="animation">Animation</option>
                  <option value="digital design">Digital Desing</option>
                </select>
              </div>
              <div>
                <label>Players Photo</label>
                <label className="fileupload-lable" htmlFor="playerphoto">
                  <span className="upload-icon">{fileuploadicon}</span>
                  Uplaod image
                </label>
                <input
                  className="form-inputs"
                  name="playerphoto"
                  type="file"
                  id="playerphoto"
                  // value={formData.playerphoto}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </fieldset>
        {/* AUCTION */}
        <fieldset>
          <legend>Auction Details</legend>
          <div className="form-container auction">
            <div className="row">
              <div>
                <label htmlFor="baseprice">Base Price</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="baseprice"
                  id="baseprice"
                  placeholder="Base price"
                  value={formData.baseprice}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="baseprice">Bid Price</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="bidprice"
                  id="bidprice"
                  placeholder="Bid price"
                  value={formData.bidprice}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="previousteam">Previous Team</label>

                <select
                  name="previousteam"
                  className="dropdown"
                  value={formData.curruntsempreviousteamester}
                  onChange={handleInputChange}
                >
                  <option value="Knights">Knights</option>
                  <option value="Hurricanes">Hurricanes</option>
                  <option value="Royals">Royals</option>
                  <option value="Blasters">Blasters</option>
                  <option value="Panther">Panther</option>
                  <option value="Empire">Empire</option>
                  <option value="Wolves">Wolves</option>
                  <option value="Super Kings">Super Kings</option>
                  <option value="Striker">Striker</option>
                  <option value="Titans">Titans</option>
                  <option value="Falcons">Falcons</option>
                </select>
              </div>
              <div>
                <label htmlFor="currentteam">Current Team</label>

                <select
                  name="currentteam"
                  className="dropdown"
                  value={formData.currentteam}
                  onChange={handleInputChange}
                >
                  <option value="Knights">Knights</option>
                  <option value="Hurricanes">Hurricanes</option>
                  <option value="Royals">Royals</option>
                  <option value="Blasters">Blasters</option>
                  <option value="Panther">Panther</option>
                  <option value="Empire">Empire</option>
                  <option value="Wolves">Wolves</option>
                  <option value="Super Kings">Super Kings</option>
                  <option value="Striker">Striker</option>
                  <option value="Titans">Titans</option>
                  <option value="Falcons">Falcons</option>
                </select>
              </div>

              <div>
                <label htmlFor="playertype">Player Type</label>

                <select
                  name="playertype"
                  className="dropdown"
                  value={formData.playertype}
                  onChange={handleInputChange}
                >
                  <option value="batsman">Batsman</option>
                  <option value="bolwer">Bowler</option>
                  <option value="allrounder">All Rounder</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        {/* statistics */}
        <fieldset>
          <legend>Statistics</legend>
          <div className="form-container auction">
            <div className="row">
              <div>
                <label htmlFor="totalruns">Total Runs</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="totalruns"
                  id="totalruns"
                  placeholder="Total Runs"
                  value={formData.totalruns}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="innings">Innings</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="innings"
                  id="innings"
                  placeholder="Innings"
                  value={formData.innings}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="strikerate">Strike Rate</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="strikerate"
                  id="strikerate"
                  placeholder="strikerate"
                  value={formData.strikerate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="average">Average</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="average"
                  id="average"
                  placeholder="average"
                  value={formData.averageruns}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="totalwickets">Total Wickets</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="totalwickets"
                  id="totalwickets"
                  placeholder="totalwickets"
                  value={formData.totalwickets}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="eco">Ecomony</label>

                <input
                  className="form-inputs"
                  type="number"
                  min={0}
                  name="eco"
                  id="eco"
                  placeholder="Economy"
                  value={formData.economy}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
