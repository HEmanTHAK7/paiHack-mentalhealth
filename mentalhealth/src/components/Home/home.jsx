import React, { Component } from 'react'
import Cards from '../cards/cards'
import Games from '../Games/games'
import Movies from  '../Movies/movies'
import './home.css'
export default class home extends Component {
  render() {
    return (
      <div className='Home-page'>
        {/*    */}
        <div className='chome'>
        <Games/>
        {/* <Cards/> */}
        {/* <Movies/> */}
        </div>
        
      </div>
    )
  }
}
