const questions = [
    {
      text: "Which of the following is the correct name of React.js?",
      options: [
        { id: 0, text: "React", isCorrect: false },
        { id: 1, text: "React.js", isCorrect: false },
        { id: 2, text: "ReactJS", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
  
    {
      text: "Which of the following command is used to install create-react-app?",
      options: [
        { id: 0, text: "npm install -g create-react-app", isCorrect: true },
        { id: 1, text: "npm install create-react-app", isCorrect:  false },
        { id: 2, text: "npm install -f create-react-app", isCorrect:  false },
        { id: 3, text: "install -g create-react-app", isCorrect: false },
      ],
    },
    {
      text: " What of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original DOM", isCorrect:  false },
        { id: 1, text: "Virtual DOM", isCorrect:true },
        { id: 2, text: "Both A and B.", isCorrect: false},
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
    
    {
      text: "What is the return value of the useState hook?",
      options: [
        { id: 0, text: " Pair of current state and function updating it", isCorrect: true },
        { id: 1, text: "Current State", isCorrect: false },
        { id: 2, text: "Function updating the current state", isCorrect:false },
        { id: 3, text: "UseState returns nothing", isCorrect: false },
      ],
    },
    {
      text: " What is the default port where webpack-server runs?",
      options: [
        { id: 0, text: "8080", isCorrect: true },
        { id: 1, text: "3000", isCorrect: false },
        { id: 2, text: "3030", isCorrect:false },
        { id: 3, text: "6060", isCorrect: false },
      ],
    },
  ];
  
  export default questions;