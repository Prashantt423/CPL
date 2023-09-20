import { Link } from "react-router-dom"
const Nav = () =>{
    return(
        <div className="navbar">
            <h1>CHAMPIONS PREMIER LEAUGE</h1>
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><Link to="/auction">Auction</Link></li>
                </ul>
            </nav>

        </div>
    )

}
export default Nav