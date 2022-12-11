import React from 'react'
import Face from '../face/face'
import logo from '../assets/vada.png'
import Survay from '../components/Survey/SurveyComponent'

function Home() {
  return (
    <div>
        <div className='vada'>
            <div className='image'>
                <img src={logo} alt="Vada"/>
            </div>
                {/* <Survay/> */}
                <Face/>
                <div className='company'>
                <h2 >VADA CONSULTANCY</h2>
            </div>
        </div>
  </div>
  )
}

export default Home