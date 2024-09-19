

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPoints, subtractPoint, resetAnswerState } from '../../redux/ScoreSlice';
import cls from "../../assets/styles/questionPage/QuestionPage.module.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { Components } from '../../components';

export default function QuestionPage({correctAnswer, answers, nextRoute, audio, birds, inform}) {
  const dispatch = useDispatch();
  const [attempts, setAttempts] = useState(0);
  const [answerStates, setAnswerStates] = useState(answers.map(() => "btn"));
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetAnswerState());
  }, [location.pathname, dispatch]);

  const handleAnswerClick = (answer, index) => {
    if(isAnsweredCorrectly) return;
    // setSelectedAnswer(answer)

    const updatedAnswerStates = [...answerStates]

    
    if (answer === correctAnswer) {
      updatedAnswerStates[index] = "true";
      setIsAnsweredCorrectly(true)
        dispatch(addPoints(5));
    } else {
        updatedAnswerStates[index] = "false";
        dispatch(subtractPoint());
        setAttempts(attempts+1)
    }
    setAnswerStates(updatedAnswerStates);
  };

  const handleNextRouteClick = () => {
    if(isAnsweredCorrectly) {
      navigate(nextRoute)
    }
  }
  return (
    <div className={cls.answers}>
      <div className={cls.main}>
        <div className={cls.navbar}>
          {answers.map((answer, index) =>(
              <ul className={cls.listgr} key={index}>
                <li 
                  className={cls.list}
                  value={answer}
                  disabled={isAnsweredCorrectly}
                  onClick={() => handleAnswerClick(answer, index)}
                >
                  <span className={
                    answerStates[index] === "btn"
                    ? cls.btn
                    : answerStates[index] === "true"
                    ? cls.true
                    : cls.false
                  }></span>
                  {answer}
                </li>
              </ul>
          ))}
        </div>
        {isAnsweredCorrectly ? (
          <div className={cls.info}>
              <Components.InfoPlayer src={audio} bird={birds} name={correctAnswer} info={inform}/>
          </div>
        ): (
          <div></div>
        )}

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