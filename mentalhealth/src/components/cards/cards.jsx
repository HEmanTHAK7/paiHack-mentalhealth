import React, { Component } from 'react'
import person from '../../assets/person.jpg'
import './card.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCrown} from 'react-icons/fa'


export default class cards extends Component {
  render() {
    return (
      <div className='cbody'>
      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>GAMES</b></h4>
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>


      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>BOOK</b></h4>
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>


      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>MOVIES</b></h4>
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>
      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>MUSIC</b></h4>
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>


      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>PERSONAL  </b>  <FaCrown/></h4>
      
      
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>

      <div className='cardBody'> 
      <div className='card-items'>
      <img src={person} alt="Avatar" className='cardImg' />
      <div className="container">
      <h4><b>PUBLIC</b> <FaCrown/></h4>
      <p>Architect & Engineer</p>
      <button > Read More </button>
      </div>
      </div>
      </div>

      </div>

      
    )
  }
}
