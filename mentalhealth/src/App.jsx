import Home from './Home/home'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
 

  return (
    <div className='front-Page'>
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