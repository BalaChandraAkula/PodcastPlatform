import React from 'react' 
import './styles.css';

function Button({text,onClick}) {
  return (
    <div className='custom-btn' onClick={onClick}>{text}</div>
  )
}

export default Button