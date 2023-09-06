import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


import "./header.scss"


export default function Header() {
  return (
    <div className='header'>
       <div className="headerContainer">
       <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon  icon={faBed} /> 
                <span>Stays</span>  
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon  icon={faPlane} /> 
                <span>Flights</span>  
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon  icon={faCar} /> 
                <span>Car rentals</span>  
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon  icon={faBed} /> 
                <span>Attractions</span>  
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon  icon={faTaxi} /> 
                <span>Airport taxis</span>  
            </div>
        </div>
        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
        <p className="headerDesc">
            Get rewarded for your travels - unlock instant savings of 10% or 
        </p>
        <button className="headerButton">Sign in/ Register</button>
       </div>  
        
    </div>
  )
}
