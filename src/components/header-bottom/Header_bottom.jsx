

import React from 'react'
import cls from "../../assets/styles/header/bottom/header.module.scss"

export default function Headerbottom() {
  return (
    <div>
      <ul className={cls.species}>
        <li>Разминка</li>
        <li>Воробьиные</li>
        <li>Лесные птицы</li>
        <li>Певчие птицы</li>
        <li>Хищные птицы</li>
        <li>Морские птицы</li>
      </ul>
    </div>
  )
}
