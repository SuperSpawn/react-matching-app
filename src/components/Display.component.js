import data from '../data/data.json'

import '../styles/Display.css'

export const Display = ({currentQuestion}) => {
  return (
    <div className='Display-container'>
      <img src={data[currentQuestion].image} alt="current question" className='Display-image'/>
      <h4 className='Display-description'>{data[currentQuestion].description}</h4>
    </div>
  )
}
