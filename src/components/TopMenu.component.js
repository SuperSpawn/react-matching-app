import '../styles/TopMenu.css'

import React from 'react'

export const TopMenu = ({correctCounter, wrongCounter}) => {
  return (
    <div className='TopMenu-container'>
      <div className='wrong-counter-container'>
        <img src='/assets/thumbsdown.jpg' alt='wrong answer image' className='wrong-answer-image'/>
        <h3 className='wrong-answer-counter'>{wrongCounter}</h3>
      </div>
      <div className='correct-counter-container'>
        <h3 className='correct-answer-counter'>{correctCounter}</h3>
        <img src='/assets/thumbsup.jpg' alt='right answer image' className='correct-answer-image'/>
      </div>
    </div>
  )
}
