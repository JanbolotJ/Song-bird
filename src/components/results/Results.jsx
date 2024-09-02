

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/ScoreSlice';
import cls from "../../assets/styles/results/Results.module.scss"

export default function Results() {
    const score = useSelector((state) => state.score.score)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleMain = () => {
        dispatch(reset());
        navigate("/")
    }

    const handleRestart = () => {
        dispatch(reset());
        navigate("/quiz/razminka")
    }
  return (
    <div className={cls.navbar}>
      <h1 className={cls.results}>Ваш итоговый счет: {score}</h1>
      <div className={cls.handleclicks}>
        <button onClick={handleMain} className={cls.main}>Вернуться на главную</button>
        <button onClick={handleRestart} className={cls.restart}>Начать заново</button>
      </div>
    </div>
  )
}
