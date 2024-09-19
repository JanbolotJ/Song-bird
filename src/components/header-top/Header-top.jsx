import React from 'react';
import cls from "../../assets/styles/header/top/headert.module.scss";
import { Components } from '..';
import Logo from "../../assets/images/logo/logo-svg.svg";
import { useSelector } from 'react-redux';

export default function Headertop() {
  const score = useSelector((state) => state.score.score)
  return (
    <header>
      <div className={cls.navbar}>
          <Components.Photo src={Logo} />
          <div>
            <h5>Score: {score}</h5>
          </div>
      </div>
    </header>
  )
}
