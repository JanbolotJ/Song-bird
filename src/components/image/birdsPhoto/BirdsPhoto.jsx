

import React from 'react'
import cls from "../../../assets/styles/audio-player/Photo.module.scss"
import Photo from "../../../assets/images/birds/interrogation/png-clipart-question-mark-drawing-icons-logos-emojis-question-marks.png"
import { useSelector } from 'react-redux'

export default function BirdsPhoto({src}) {
  const isAnswerCorrectly = useSelector((state) => state.score.isAnswerCorrectly)
  return (
    <div className={cls.navbar}>
      <img src={!isAnswerCorrectly ? Photo : src} alt="" className={cls.birds_photo}/>
    </div>
  )
}
