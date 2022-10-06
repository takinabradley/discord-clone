import React from 'react'
import './ServerIcon.css'

export default function ServerIcon({ img, name, onClick, isSelected = false }) {
  const selectedStyle = {
    border: '2px solid white',
    height: '35px',
    borderRradius: '2px',
    justifySelf: 'flex-start',
    position: 'relative',
    top: '4px',
    right: '1px'
  }
  
  return (
    <div className='icon-wrapper'>
      <div className={isSelected ? 'select-indicator selected' : 'select-indicator'}></div>
      <img src={img} alt={name} className='server-icon' title={name}
        onClick={onClick ? onClick : null}></img>
    </div>
    
  )
}