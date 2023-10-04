import { useEffect } from "react";
import { useDebugValue } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
const Update = () => {


    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        currentSemester: "1",
        dateOfBirth: null,
        branch: "software",
        image: null,
        basePrice: "",
        bidPrice: "",
        previousTeam: "None",
        currentTeam: "None",
        playerType: "batsman",
        totalRuns: "0",
        innings: "0",
        strikeRate: "0",
        average: "0",
        totalWickets: "0",
        economyRate: "0",
        battingHand: "None",
        fours: "0",
        sixes: "0",
        bowlingStyle: "None",
        HighestWicket: "0",
        overs: "0",
      });
      const {id} = useParams()
      //for pre filled form
      useEffect(() => {
        axios.get("http://localhost:6001/player/"+id , {withCredentials :true})
        .then(response => {
            console.log("data is" , response.data)
            setFormData(response.data);
        }).catch(err => {
            console.log("error is " , err) //can not find player by id so handle input will not work
        }) 
        //handnle form
        const handleInput = () => {
            axios.put(`http://localhost:6001/player/update/${id}` , formData , {withCredentials:true})
            .then(response => {
                console.log("data is updated" , response.data)
            }).catch(err =>{
                console.log("error is" , err)
            })
        }
        

      }, [])
    return (
        <div className="container add-player-form">
          <form>
            <div className="header">
              <div>
                <h2>Update Player</h2>
              </div>
              <div className="submit-btn">
                <button className="submit" type="submit">
                  Update
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
                      name="name"
                      id="playername"
                      placeholder="Enter Name"
                      
                      required
                   
                    />
                  </div>
                  <div>
                    <label htmlFor="mobilenumber">Mobile Number</label>
    
                    <input
                      className="form-inputs"
                      type="text"
                      name="phoneNumber"
                      id="mobilenumber"
                      required
                      placeholder="Enter Mobile Number"
                    
                    />
                  </div>
                  <div>
                    <label htmlFor="curruntsemester">Current Semester</label>
    
                    <select
                      name="currentSemester"
                      className="dropdown"
                     
                    >
                      <option value="1">Semester 1</option>
                      <option value="3">Semester 3</option>
                      <option value="5">Semester 5</option>
                      <option value="7">Semester 7</option>
                      <option value="9">Semester 9</option>
                    </select>
                  </div>
                </div>
    
                <div className="row">
                  <div>
                    <label htmlFor="DOB">Date of Birth</label>
                    <input
                      className="form-inputs"
                      type="date"
                      name="dateOfBirth"
                      id="DOB"
                      required
                     
                    />
                  </div>
                  <div>
                    <label htmlFor="branch">Branch</label>
    
                    <select
                      name="branch"
                      className="dropdown"
                     
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
                      {/* <span className="upload-icon">{fileuploadicon}</span> */}
                      Uplaod image
                    </label>
                    <input
                      className="form-inputs"
                      name="image"
                      type="file"
                      id="playerphoto"
                      required
                   
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
                      name="basePrice"
                      id="baseprice"
                      required
                      placeholder="Base price"
                     
                    />
                  </div>
                  <div>
                    <label htmlFor="baseprice">Bid Price</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="bidPrice"
                      id="bidprice"
                      required
                      placeholder="Bid price"
                    
                    />
                  </div>
                  <div>
                    <label htmlFor="previousteam">Previous Team</label>
    
                    <select
                      name="previousTeam"
                      className="dropdown"
                   
                    >
                      <option value="None">None</option>
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
                      name="currentTeam"
                      className="dropdown"
                 
                    >
                      <option value="None">None</option>
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
                      name="playerType"
                      className="dropdown"
                      
                    >
                      <option value="batsman">Batsman</option>
                      <option value="bolwer">Bowler</option>
                      <option value="allrounder">All Rounder</option>
                      <option value="wicketKeeper">Wicket keeper</option>
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
                      name="totalRuns"
                      id="totalruns"
                      placeholder="Total Runs"
                  
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
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="strikerate">Strike Rate</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="strikeRate"
                      id="strikerate"
                      placeholder="strikerate"
                     
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
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="totalwickets">Total Wickets</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="totalWickets"
                      id="totalwickets"
                      placeholder="totalwickets"
                    
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
                      name="economyRate"
                      id="eco"
                      placeholder="Economy"
                      
                    />
                  </div>
    
                  <div>
                    <label htmlFor="previousteam">Batting Hand</label>
    
                    <select
                      name="battingHand"
                      className="dropdown"
                      
                    >
                      <option value="None">None</option>
                      <option value="righthand">Right hand</option>
                      <option value="lefthand">Left hand</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
    
                  <div>
                    <label htmlFor="previousteam">Bowling Style</label>
    
                    <select
                      name="bowlingStyle"
                      className="dropdown"
                      
                    >
                      <option value="None">None</option>
                      <option value="Right-arm fast">Right-arm fast</option>
                      <option value="Right-arm medium">Right-arm medium</option>
                      <option value="Right-arm Leg Break">
                        Right-arm Leg Break
                      </option>
                      <option value="Slow left-arm orthodox">
                        Slow left-arm orthodox
                      </option>
                      <option value="Left-arm medium">Left-arm medium</option>
                      <option value="Left-arm fast">Left-arm fast</option>
                      <option value="Right-arm Off Break">
                        Right-arm Off Break
                      </option>
                    </select>
                  </div>
    
                  <div>
                    <label htmlFor="fours">Fours</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="fours"
                      id="fours"
                      placeholder="Fours"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="sixes">Sixes</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="sixes"
                      id="sixes"
                      placeholder="Sixes"
                      
                    />
                  </div>
                </div>
    
                <div className="row">
                  <div>
                    <label htmlFor="eco">Highest Wicket</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="HighestWicket"
                      id="HighestWicket"
                      placeholder="Highest Wicket"
                      
                    />
                  </div>
                  <div>
                    <label htmlFor="eco">Overs</label>
    
                    <input
                      className="form-inputs"
                      type="number"
                      min={0}
                      name="overs"
                      id="overs"
                      placeholder="overs"
                      
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          {/* <ToastContainer position="top-center" autoClose={3000} /> */}
        </div>
      );
}
export default Update