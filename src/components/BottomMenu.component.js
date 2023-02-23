import React from 'react'
import data from '../data/data.json'

import '../styles/BottomMenu.css'

export const BottomMenu = ({correctCounter, setCorrectCounter, wrongCounter, setWrongCounter, currentQuestion, setCurrentQuestion}) => {
  const correctAnswer = data[currentQuestion].rightAnswer;


  const falseHandler = () => {
    if(correctAnswer === 'false') {
      setCorrectCounter(correctCounter + 1);
    }
    else {
      setWrongCounter(wrongCounter + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }
  const trueHandler = () => {
    if(correctAnswer === 'true') {
      setCorrectCounter(correctCounter + 1);
    }
    else {
      setWrongCounter(wrongCounter + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className='BottomMenu-container'>
      <button onClick={falseHandler} className='BottomMenu-button-false'>False</button>
      <button onClick={trueHandler} className='BottomMenu-button-true'>True</button>
    </div>
  )
}
