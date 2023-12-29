import React, { useState }from 'react';
import './Box.jsx';
import questions from "../questions.js";
import Box from './Box.jsx';


function ScoreBoard(props) {

  let theme = props.theme;           
  let toggleTheme =props.toggleTheme; 

  let allQues = questions.length; 

  let score = props.score;           
  let [restart, setRestart] = useState(false);


  let Restart = () => {
    setRestart(true);
  }
  if (restart) {
    return <Box />;
  }     

  return (
      <div id='main'>
        <div className='question'>
          <div className='head'>
            <span>Kalvium</span>
            <button className='toggle' onClick={toggleTheme}>{theme ? 'DARK' : 'LIGHT'} </button>
          </div>
          <div id='heading'>Great!!</div>
        </div>  
        <div id='result'>
          <h2>Final result</h2>
          <div className='box'>{score} out of {allQues} correct - {(score/allQues)*100}% </div>  
          <button  id='restart' onClick={Restart}>Restart</button>
        </div>
      </div>
  );
}

export default ScoreBoard;