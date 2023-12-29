import React, { useState } from "react";
import questions from "../questions.js";
import Result from "./Result.jsx";


function Box() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(false);
  const [show, setShow] = useState(false);
  const [highlight, sethighlight] = useState(false);



  let toggleTheme = () => {
    setTheme((theme) => !theme);       

    const body = document.querySelector('body'); 

    if (theme) {                                 
      body.style.backgroundColor = 'aquamarine' ;
      body.style.color = 'black';
    } else {
      body.style.backgroundColor = '#000000' ;
      body.style.color = 'white';
    }

  };  

  const handleAnswer = (correct) => {
		if (correct) {
			setScore(score + 1);
		}

		const nextQuestion = currQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrQuestion(nextQuestion);
		} else {
			setShow(true);
		}
	};

  const toggle = () => {
    sethighlight((highlight) => !highlight);
    const questionText = document.getElementById("question");
    if(highlight){
      questionText.style.color = "red";
    }else{
      questionText.style.color = "#000000"
    }
  };
  
  return (
   
    <div id='main'> 
      {show ?  (
          <Result score = {score} theme = {theme} toggleTheme = {toggleTheme}/>
      ) : (
            <div className='container'>
              <div className='header'>
                <span>Kalvium</span>
                <button className='toggle' onClick={toggleTheme}>{theme ? 'DARK' : 'LIGHT'} </button>
              </div>
              <div id='head'>Welcome to the Quiz!</div>
              <div className='questions'>
                  <h4>Question:{currQuestion + 1} / {questions.length}</h4>
                  <h3 id='question'>{questions[currQuestion].text} </h3> 
                  <div id='options' >
                    { questions[currQuestion].options.map((option) => (                            
                          <button className="option" onClick ={() => handleAnswer(option.isCorrect)} key={option.id}>{option.text}</button>
                    ))}
                  </div>
                  <div className='buttons'>                                         
                    <button id='high' onClick={toggle}>Highlight</button>
                    <button id='remove' onClick={toggle}>Remove highlight</button>         
                  </div> 
              </div>
            </div>
   
      )}                      
    </div>
  );
}

export default Box;