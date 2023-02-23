
import './App.css';

import React,{useState} from 'react';
import { TopMenu } from './components/TopMenu.component';
import { Display } from './components/Display.component';
import { BottomMenu } from './components/BottomMenu.component';

function App() {
  const [correctCounter, setCorrectCounter] = useState(0);  
  const [wrongCounter, setWrongCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="container">
      <TopMenu
        correctCounter={correctCounter}
        wrongCounter={wrongCounter}
      />
      <Display
        currentQuestion={currentQuestion}
      />
      <BottomMenu
        correctCounter={correctCounter}
        setCorrectCounter={setCorrectCounter}
        wrongCounter={wrongCounter}
        setWrongCounter={setWrongCounter}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default App;
