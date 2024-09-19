

import React from 'react'
import cls from "../../assets/styles/header/bottom/header.module.scss"
import UseLocations from '../../hooks/UseLocations';
import { useLocation } from 'react-router-dom';

export default function Headerbottom() {
  const {actions} = UseLocations();
  const location = useLocation();
  return (
    <div>
      <ul className={cls.species}>
        <li 
          onClick={actions.goToRazminka} 
          className={
            location.pathname === "/quiz/razminka" 
            ? cls.active 
            : cls.inactive}>
              Разминка
        </li>
        <li 
          onClick={actions.goToVorobinye} 
          className={
            location.pathname === "/quiz/vorobinye" 
            ? cls.active 
            : cls.inactive}>
              Воробьиные
        </li>
        <li 
          onClick={actions.goToLesnye} 
          className={
            location.pathname === "/quiz/lesnye" 
            ? cls.active 
            : cls.inactive}>
              Лесные птицы
        </li>
        <li 
          onClick={actions.goToPevchie} 
          className={
            location.pathname === "/quiz/pevchie" 
            ? cls.active 
            : cls.inactive}>
              Певчие птицы
        </li>
        <li 
          onClick={actions.goToHishnye} 
          className={
            location.pathname === "/quiz/hishnye" 
            ? cls.active 
            : cls.inactive}>
              Хищные птицы
        </li>
        <li 
          onClick={actions.goToMorskie} 
          className={
            location.pathname === "/quiz/morskie" 
            ? cls.active 
            : cls.inactive}>
              Морские птицы
        </li>
      </ul>
    </div>
  )
}
