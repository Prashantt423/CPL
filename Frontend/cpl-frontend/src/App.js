import Dashboard from './Pages/Dashboard/Dashboard';
import Players from './Pages/Players/Players';
import Teams from './Pages/Teams/Teams';
import Nav from './Pages/Nav/Nav';
import Auction from './Pages/Auction/Auction';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';


function App() {
  return(
    <div className='App'>
      <div className='nav'>
        <Router>
        <Nav/>
        
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/players' element={<Players />}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/auction' element={<Auction/>}/>
          </Routes>
        </Router>

      </div>

    </div>
  )
}

export default App;
