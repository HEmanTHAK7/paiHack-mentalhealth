import Home from './Home/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
 

  return (
    <div className='front-Page'>
      <Navbar/>
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Home />}/>
        </Routes>
      </Router>
      
    </div>
  )
  
}

export default App