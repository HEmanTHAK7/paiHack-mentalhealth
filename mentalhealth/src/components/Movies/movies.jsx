import React, { Component } from 'react'
import './movies.css'

export default class movies extends Component {
  render() {
    return (
      <div className='mainM'>
        
        <div className='mbody'>
        <h1>Movies</h1>
        <ul>
            <li>Cake (2014)</li>
            <li>It's Kind of a Funny Story (2010)</li>
            <li>The Perks of Being a Wallflower (2012)</li>
            <li>The Virgin Suicides (1998)</li>
            <li>Melancholia (2011)</li>
            <li>Girl, Interrupted (1999)</li>
            <li>Little Miss Sunshine (2006) </li>
           
        </ul>
        </div>
      </div>
    )
  }
}
