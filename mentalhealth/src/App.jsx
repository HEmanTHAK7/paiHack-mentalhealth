
import './App.css'
import Home from './components/Home/home'
import NavBar from './components/Navbar/Navbar'
import logo from './assets/vada.png'
function App() {
 

  return (
    <div className='front-Page'>
      {/* <div className='vada'>
        <div className='image'>
        <img src={logo} alt="Vada"/>
        </div>
         
        <div className='company'>
        <h2 >VADA CONSULTANCY</h2>
      </div>
      </div> */}
      {/* <NavBar/> */}
      <Home/> 
    </div>
    
  )
}

export default App
