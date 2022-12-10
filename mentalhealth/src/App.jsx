
import './App.css'
// import Home from './components/home'
import logo from './assets/vada.png'
function App() {
 

  return (
    <div className='front-Page'>
      <div className='vada'>
        <div className='image'>
        <img src={logo} alt="Vada"/>
        </div>
        
        <div className='company'>
        <h2 >VADA CONSULTANCY</h2>
      </div>
      </div>
      
      {/* <Home/> */}
    </div>
    
  )
}

export default App
