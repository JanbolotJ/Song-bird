

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPoints, subtractPoint } from '../../redux/ScoreSlice';
import cls from "../../assets/styles/questionPage/QuestionPage.module.scss";
import { useNavigate } from 'react-router-dom';

export default function QuestionPage({correctAnswer, answers, nextRoute}) {
  const dispatch = useDispatch();
  const [attempts, setAttempts] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const navigate = useNavigate();


  const handleAnswerClick = (answer) => {
    // setSelectedAnswer(answer)
    
    if (answer === correctAnswer) {
      setIsAnsweredCorrectly(true)
        dispatch(addPoints(5));
    } else {
        dispatch(subtractPoint());
        setAttempts(attempts+1)
    }
  };
  // const getButtonStyle = (answer) => {
  //   if(!selectedAnswer) return{};

  //   if(answer === correctAnswer) {
  //     return { backgroundColor: 'green', color: 'white' };
  //   };
  //   if (answer === selectedAnswer) {
  //     return { backgroundColor: 'red', color: 'white' };
  //   }
  // };

  const handleNextRouteClick = () => {
    if(isAnsweredCorrectly) {
      navigate(nextRoute)
    }
  }
  return (
    <div className={cls.answers}>
      <div className={cls.navbar}>
          {answers.map((answer, index) =>(
              <label key={index} className={cls.quest}>
                <input 
                  className={isAnsweredCorrectly ? cls.true : cls.false}
                  type="radio" 
                  name="answer"
                  value={answer}
                  disabled={isAnsweredCorrectly}
                  onChange={() => handleAnswerClick(answer)}
                />
                <span>{answer}</span>
              </label>  
          ))}
      </div>

      <button
        onClick={handleNextRouteClick}
        disabled={!isAnsweredCorrectly}
        className={isAnsweredCorrectly ? cls.correct : cls.dcorrect}
        
      >
        Следующий вопрос
      </button>
    </div>
  )
}
