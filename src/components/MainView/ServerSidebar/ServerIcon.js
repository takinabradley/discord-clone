import React from 'react'
import './ServerIcon.css'

export default function ServerIcon({ img, name, onClick, isSelected = false, className }) {
  
  return (
    <div className={className ? `icon-wrapper ${className}` : 'icon-wrapper'}>
      <div className={isSelected ? 'select-indicator selected' : 'select-indicator'}></div>
      <img src={img} alt={name} className='server-icon' title={name}
        onClick={onClick ? onClick : null}></img>
    </div>
    
  )
}